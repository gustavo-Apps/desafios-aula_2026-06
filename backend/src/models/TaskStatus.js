import { DataTypes, Model } from "sequelize";
import {sequelize} from "../Database/Connection.js";

class TaskStatus extends Model {}

TaskStatus.init(
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
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // Cor hex para uso no frontend (ex: "#10B981")
    color: {
      type: DataTypes.STRING(7),
      defaultValue: "#6B7280",
      validate: {
        is: /^#[0-9A-Fa-f]{6}$/,
      },
    },
    // Controla a ordem de exibição nas listagens/dropdowns
    sort_order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "TaskStatus",
    tableName: "task_statuses",
    underscored: true,
    defaultScope: {
      order: [["sort_order", "ASC"]],
    },
  }
);

export default TaskStatus;
