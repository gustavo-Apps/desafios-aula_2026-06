import { Task, ActivityType, TaskStatus, TaskPriority } from "../models/index.js";
import { broadcast } from "../websocket/ws.js";

const taskController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await getTasks(req.user.id, req.query);
      return res.status(200).json({ tasks });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar tarefas.", details: error.message });
    }
  },

  getTaskById: async (req, res) => {
    try {
      const task = await getTaskById(req.params.id, req.user.id);
      if (!task) return res.status(404).json({ error: "Tarefa nao encontrada." });
      return res.status(200).json({ task });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar tarefa.", details: error.message });
    }
  },

  createTask: async (req, res) => {
    try {
      const result = await createTask(req.body, req.user.id);
      broadcast("task:created", result);
      return res.status(201).json({ message: "Tarefa criada com sucesso.", task: result });
    } catch (error) {
      const status = error.message.includes("obrigatorio") ? 400 : 500;
      return res.status(status).json({ error: error.message });
    }
  },

  updateTask: async (req, res) => {
    try {
      const result = await updateTask(req.params.id, req.body, req.user.id);
      broadcast("task:updated", result);
      return res.status(200).json({ message: "Tarefa atualizada com sucesso.", task: result });
    } catch (error) {
      const status = error.message.includes("nao encontrada") ? 404 : 500;
      return res.status(status).json({ error: error.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      await deleteTask(req.params.id, req.user.id);
      broadcast("task:deleted", { id: Number(req.params.id) });
      return res.status(200).json({ message: "Tarefa removida com sucesso." });
    } catch (error) {
      const status = error.message.includes("nao encontrada") ? 404 : 500;
      return res.status(status).json({ error: error.message });
    }
  },
};

// ── include padrao para todas as queries ──
const defaultInclude = [
  { model: ActivityType,  as: "activityType",  attributes: ["id", "name"] },
  { model: TaskStatus,    as: "taskStatus",     attributes: ["id", "name", "color"] },
  { model: TaskPriority,  as: "taskPriority",   attributes: ["id", "name", "color"] },
];

async function getTasks(userId, filters = {}) {
  const where = { user_id: userId };
  const order = [["task_date", "DESC"]];

  if (filters.task_status_id)   where.task_status_id   = filters.task_status_id;
  if (filters.task_priority_id) where.task_priority_id = filters.task_priority_id;
  if (filters.activity_type_id) where.activity_type_id = filters.activity_type_id;

  if (filters.order_by) {
    const [field, direction] = filters.order_by.split(":");
    const allowed = ["task_date", "title", "task_status_id", "task_priority_id"];
    if (allowed.includes(field) && ["ASC", "DESC"].includes(direction?.toUpperCase())) {
      order[0] = [field, direction.toUpperCase()];
    }
  }

  return Task.findAll({ where, include: defaultInclude, order });
}

async function getTaskById(taskId, userId) {
  return Task.findOne({
    where: { id: taskId, user_id: userId },
    include: defaultInclude,
  });
}

async function createTask(taskData, userId) {
  const {
    title,
    description,
    task_date,
    task_end_date,
    notes,
    activity_type_id = 1,
    task_status_id   = 1,
    task_priority_id = null,
  } = taskData;

  if (!title) throw new Error("O campo 'title' e obrigatorio.");

  const task = await Task.create({
    title,
    description:      description      || null,
    task_date:        task_date        ? new Date(task_date) : new Date(),
    task_end_date:    task_end_date    ? new Date(task_end_date) : null,
    notes:            notes            || null,
    activity_type_id,
    task_status_id,
    task_priority_id,
    user_id: userId,
  });

  return getTaskById(task.id, userId);
}

async function updateTask(taskId, taskData, userId) {
  const task = await Task.findOne({ where: { id: taskId, user_id: userId } });
  if (!task) throw new Error("Tarefa nao encontrada.");

  // Permite atualizar apenas os campos enviados
  const allowed = [
    "title", "description", "task_date", "task_end_date",
    "notes", "activity_type_id", "task_status_id", "task_priority_id",
  ];
  const updates = {};
  for (const key of allowed) {
    if (key in taskData) updates[key] = taskData[key];
  }

  await task.update(updates);
  return getTaskById(taskId, userId);
}

async function deleteTask(taskId, userId) {
  const task = await Task.findOne({ where: { id: taskId, user_id: userId } });
  if (!task) throw new Error("Tarefa nao encontrada.");
  await task.destroy();
}

export default taskController;
