import { DataTypes } from "sequelize";
import sequelize from "../Database/Database";

const Company = sequelize.define('companies', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name: {
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

export default Company;