import { Task, User, ActivityType, TaskStatus } from "../models/index.js";
// const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const taskController = {
  getTasks: async (req, res) => {
    const tasks = await getAllTasks(req.user.id);
    res.json(tasks);
    return res.status(200).json(tasks);
  },
  getTaskById: async (req, res) => {
    // Logic to get a task by ID
    const task = await taskService.getTaskById(req.params.id, req.user.id);
  },
  createTask: async (req, res) => {
    // Logic to create a task
  },
  updateTask: async (req, res) => {
    // Logic to update a task
  },
  deleteTask: async (req, res) => {
    // Logic to delete a task
  },
};

async function getAllTasks(userId) {
  const where = { userId };
  Task.findAll({
    where,
    include: [
      { model: ActivityType, as: "activityType" },
      { model: TaskStatus, as: "taskStatus" },
    ],
  })
}

export default taskController;
