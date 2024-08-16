import pool from "../config/db.config";

export async function getClassroomByTeacherId(teacherId: number) {
    const query = 'SELECT * FROM classrooms WHERE teacher_id = $1';
    const { rows } = await pool.query(query, [teacherId]);
    return rows;
}

export async function createClassroom(teacherId: number, name: string) {
    const query = 'INSERT INTO classrooms (teacher_id, name) VALUES ($1, $2) RETURNING *';
    const { rows } = await pool.query(query, [teacherId, name]);
    return rows[0];
}

export async function getClassroomById(id: number) {
    const query = 'SELECT * FROM classrooms WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
}