import express from 'express';
import { addClassroom, viewClassrooms } from '../controller/teacher.controller';

const router = express.Router();

// Create Classroom (Role: Teacher)
router.post('/:teacherId/classrooms', addClassroom);

// View Classrooms (Role: Teacher)
router.get('/:teacherId/classrooms', viewClassrooms);

export default router;