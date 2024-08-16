import pool from "../config/db.config";

export async function getTasksByClassroomId(classroomId: number) {
    const query = 'SELECT * FROM tasks WHERE classroom_id = $1';
    const { rows } = await pool.query(query, [classroomId]);
    return rows;
}

export async function assignTaskToClassroom(classroomId: number, title: string, description: string, dueDate: Date) {
    const query = 'INSERT INTO tasks (classroom_id, title, description, due_date) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await pool.query(query, [classroomId, title, description, dueDate]);
    return rows[0];
}