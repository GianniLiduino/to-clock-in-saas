import { Sequelize } from "sequelize";

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

console.log(host, user, pass, database);

const sequelize = new Sequelize(`${database}`, `${user}`, pass, {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;