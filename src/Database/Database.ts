import mysql from 'mysql2/promise';

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

console.log(host, user, pass, database);

//database: database connection via pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: user,
    password: pass,
    database: database,
    // timezone: 'gmt+6'  //<-here this line was missing 'utc'
});

export default pool;