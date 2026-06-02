import { where } from "sequelize";
import { Task, ActivityType, TaskStatus } from "../models/index.js";

const TaskPriorityController = {
  getPriorities: async (req, res) => {
    try {
      const priorities = await Task.findAll({
        attributes: ["id", "name"],
        where: { user_id: req.user.id },
        include: [
          { model: ActivityType, as: "activityType", attributes: ["id", "name"] },
          { model: TaskStatus, as: "taskStatus", attributes: ["id", "name"] },
        ],
        order: [["name", "ASC"]],
      });
      return res.status(200).json({ priorities });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar prioridades.", details: error.message });
    }
  },
};

export default TaskPriorityController;
