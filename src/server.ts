import express from 'express';
import teacherRouter from './router/teacher.router';

const server = express();
server.use(express.json());

// routes
server.use('/teachers', teacherRouter);

export default server;