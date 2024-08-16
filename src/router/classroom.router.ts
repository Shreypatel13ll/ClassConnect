import express from 'express';
import { addStudent, removeStudent, editClassroom, deleteClassroom, assignTask } from '../controller/classroom.controller';

const router = express.Router();


// Add Student to Classroom (Role: Teacher)
router.post('/:classroomId/students', addStudent);

// Remove Student from Classroom (Role: Teacher)
router.delete('/:classroomId/students/:studentId', removeStudent);

// Edit Classroom (Role: Teacher)
router.put('/:classroomId', editClassroom);

// Delete Classroom (Role: Teacher)
router.delete('/:classroomId', deleteClassroom);

// Assign Task to Classroom (Role: Teacher)
router.post('/:classroomId/tasks', assignTask);

// View Task Submission Status (Roles: Teacher, Student)
// router.get('/:classroomId/tasks/:taskId/submissions', viewTaskSubmissions);

export default router;