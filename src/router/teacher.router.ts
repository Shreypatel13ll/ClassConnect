import express from 'express';
import { createClassroom, viewClassrooms } from '../controller/teacher.controller';

const router = express.Router();

// Create Classroom (Role: Teacher)
router.post('/:teacherId/classrooms', createClassroom);

// View Classrooms (Role: Teacher)
router.get('/:teacherId/classrooms', viewClassrooms);

export default router;