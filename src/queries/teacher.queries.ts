import pool from "../config/db.config";

export async function getTeachers() {
    const query = 'SELECT * FROM teachers';
    const { rows } = await pool.query(query);
    return rows;
}

export async function getTeacherById(id: number) {
    const query = 'SELECT * FROM teachers WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
}

export async function createTeacher(name: string, email: string, password: string, ) {
    const query = 'INSERT INTO teachers (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await pool.query(query, [name, email, password]);
    return rows[0];
}