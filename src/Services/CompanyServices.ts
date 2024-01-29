import pool from "../Database/Database";

async function getAll() {
    const [rows, fields] = await pool.query('SELECT * FROM companies');

    return rows;
}

async function findByPk(primaryKey: number) {
    const [rows, fields] = await pool.query('SELECT * FROM companies WHERE id = ? LIMIT 1', [
        primaryKey
    ]);

    return rows;
}

async function updateByPk(primaryKey: number, fields: object) {
    let query: string = '';
    const values = [];

    Object.entries(fields).forEach(([key, value]) => {
        if (typeof value !== 'undefined') {
            query = `${query}${(values.length > 0) ? ',' : ''} ${key} = ?`;
            values.push(value);
        }
    });
    values.push(primaryKey);

    const company = await pool.query(`UPDATE companies SET ${query} WHERE id = ? LIMIT 1`, values);

    return company;
}

export default {
    getAll,
    findByPk,
    updateByPk
}