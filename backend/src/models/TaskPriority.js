import { DataTypes, Model } from "sequelize";
import {sequelize} from "../Database/Connection.js";

class TaskPriority extends Model {}

TaskPriority.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Cor em hexadecimal para uso no frontend (ex: "#3B82F6")
    color: {
      type: DataTypes.STRING(7),
      defaultValue: "#6B7280",
      validate: {
        is: /^#[0-9A-Fa-f]{6}$/,
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "TaskPriority",
    tableName: "task_priorities",
    underscored: true,
  }
);

export default TaskPriority;