import { now } from "sequelize/lib/utils";
import { Task, User, ActivityType, TaskStatus } from "../models/index.js";
// const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const taskController = {
  getTasks: async (req, res) => {
    try{
    const tasks = await getAllTasks(req.user.id);
    return res.status(200).json(tasks);
    }catch(error){
      return res.status(500).json({ error: "Erro ao buscar tarefas.", details: error.message });
    }
  },
  getTaskById: async (req, res) => {
    try {
      const task = await getTaskById(req.params.id, req.user.id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
      }
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar tarefa.", details: error.message });
    }
  },
  createTask: async (req, res) => {
    try {
      const result = await createTask(req.body, req.user.id);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar tarefa.", details: error.message });
    }
  },
  updateTask: async (req, res) => {
    try {
      const result = await updateTask(req.params.id, req.body, req.user.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar tarefa.", details: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      await deleteTask(req.params.id, req.user.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar tarefa.", details: error.message });
    }
  },
};

async function getAllTasks(userId) {
  const where = { user_id: userId };
  const tasks = await Task.findAll({
    where,
    include: [
      { model: ActivityType, as: "activityType" },
      { model: TaskStatus, as: "taskStatus" },
    ],
  })
  return tasks;
}
async function getTaskById(taskId, userId) {
  const task = await Task.findOne({
    where: { id: taskId, user_id: userId },
    include: [
      { model: ActivityType, as: "activityType" },
      { model: TaskStatus, as: "taskStatus" },
    ],
  });
  return task;
}

async function createTask(taskData, userId) {
    const { title, description, task_date = new Date(now()), activity_type_id = 1, task_status_id = 1 } = taskData;
    try{
        const task = await Task.create(
        { title, description, task_date: task_date, activity_type_id, task_status_id, user_id: userId }
      );
      return task;
    }catch(error){
      throw new Error("Erro ao criar tarefa.");
    }
  }

async function updateTask(taskId, taskData, userId) {
  let task = await Task.findOne({ where: { id: taskId, user_id: userId } });
  if (!task) {
    throw new Error("Tarefa não encontrada.");
  }
  task = await Task.update(
    { ...taskData },
    { where: { id: taskId, user_id: userId }, returning: true }
  ); 
  return task;
}
async function deleteTask(taskId, userId) {
  const task = await Task.findOne({ where: { id: taskId, user_id: userId } });
  if (!task) {
    throw new Error("Tarefa não encontrada.");
  }
  await task.destroy();
}

export default taskController;
