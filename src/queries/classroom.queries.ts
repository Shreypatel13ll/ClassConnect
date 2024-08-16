import pool from "../config/db.config";

export async function getClassroomById(id: number) {
    const query = 'SELECT * FROM classrooms WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
}

export async function getClassroomByTeacherId(teacherId: number) {
    const query = 'SELECT * FROM classrooms WHERE teacher_id = $1';
    const { rows } = await pool.query(query, [teacherId]);
    return rows;
}

export async function getClassroomByStudentId(studentId: number) {
    const query = 'SELECT * FROM classrooms WHERE id IN (SELECT classroom_id FROM student_classrooms WHERE student_id = $1)';
    const { rows } = await pool.query(query, [studentId]);
    return rows;
}

export async function createClassroom(teacherId: number, name: string) {
    const query = 'INSERT INTO classrooms (teacher_id, name) VALUES ($1, $2) RETURNING *';
    const { rows } = await pool.query(query, [teacherId, name]);
    return rows[0];
}

export async function addStudentToClassroom(studentId: number, classroomId: number) {
    const query = 'INSERT INTO student_classrooms (student_id, classroom_id) VALUES ($1, $2) RETURNING *';
    const { rows } = await pool.query(query, [studentId, classroomId]);
    return rows[0];
}

export async function removeStudentFromClassroom(studentId: number, classroomId: number) {
    const query = 'DELETE FROM student_classrooms WHERE student_id = $1 AND classroom_id = $2';
    await pool.query(query, [studentId, classroomId]);
}

export async function editClassroomName(classroomId: number, name: string) {
    const query = 'UPDATE classrooms SET name = $1 WHERE id = $2';
    const { rows } = await pool.query(query, [name, classroomId]);
    return rows[0];
}

export async function deleteClassroomById(classroomId: number) {
    const query = 'DELETE FROM classrooms WHERE id = $1';
    await pool.query(query, [classroomId]);
}