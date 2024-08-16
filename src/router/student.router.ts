import express from 'express';
import { viewStudentClassrooms, viewStudentTasks } from '../controller/student.controller';

const router = express.Router();

router.get('/:studentId/classrooms', viewStudentClassrooms);

// View Tasks
router.get('/:studentId/classrooms/:classroomId/tasks', viewStudentTasks);

// // Submit Task
// router.post('/:studentId/classrooms/:classroomId/tasks/:taskId', submitTask);

// // View Task Submission Status (for students)
// router.get('/:studentId/classrooms/:classroomId/tasks/:taskId/submissions', viewStudentTaskStatus);


export default router;