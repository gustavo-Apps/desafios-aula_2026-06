import UserCargos from "./Cargos.js";
import User from "./User.js";
import ActivityType from "./ActivityType.js";
import TaskStatus from "./TaskStatus.js";
import Task from "./Task.js";
// Uma tarefa pertence a um usuário (facilita queries diretas)
User.hasMany(Task, { foreignKey: "user_id", as: "tasks" });
Task.belongsTo(User, { foreignKey: "user_id", as: "user" });

// Uma tarefa tem um tipo de atividade
ActivityType.hasMany(Task, { foreignKey: "activity_type_id", as: "tasks" });
Task.belongsTo(ActivityType, { foreignKey: "activity_type_id", as: "activityType" });

// Uma tarefa tem um status
TaskStatus.hasMany(Task, { foreignKey: "task_status_id", as: "tasks" });
Task.belongsTo(TaskStatus, { foreignKey: "task_status_id", as: "taskStatus" });

export { User, ActivityType, TaskStatus, Task, UserCargos };