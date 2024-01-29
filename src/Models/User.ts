import { DataTypes } from "sequelize";
import sequelize from "../Database/Database";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: false
    }
});

export default User;