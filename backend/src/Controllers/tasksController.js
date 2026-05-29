
// const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const taskController = {
  getTasks: async (req, res) => {
    // Logic to get tasks
    const tasks = await taskService.getAllTasks(req.user.id); // Assuming tasks are user-specific
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

export default taskController;
