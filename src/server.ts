import express from 'express';
import teacherRouter from './router/teacher.router';
import classroomRouter from './router/classroom.router';
import studentRouter from './router/student.router';

const server = express();
server.use(express.json());

// routes
server.use('/teachers', teacherRouter);
server.use('/classrooms', classroomRouter);
server.use('/students', studentRouter);

export default server;