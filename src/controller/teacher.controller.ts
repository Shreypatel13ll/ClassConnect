import { Request, Response } from 'express';

const createClassroom = (req:Request, res: Response) => {
    res.send('Create Classroom');
}

const viewClassrooms = (req:Request, res: Response) => {
    res.send('View Classrooms');
}

export { createClassroom, viewClassrooms };