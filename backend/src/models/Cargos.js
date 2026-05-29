import { DataTypes, Model } from "sequelize";
import {sequelize} from "../Database/Connection.js";

class UserCargo extends Model {}

UserCargo.init(
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
    }
  },
  {
    sequelize,
    modelName: "UserCargos",
    tableName: "user_cargos",
    underscored: true,
  }
);

export default UserCargo;