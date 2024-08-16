import { Request, Response } from 'express';
import { getClassroomByTeacherId, createClassroom } from '../queries/classroom.queries';

const addClassroom = (req:Request, res: Response) => {
    try{
        const teacherId = parseInt(req.params.teacherId);
        const { name } = req.body;
        createClassroom(teacherId, name).then((classroom) => {
            res.status(201).json(classroom);
        }).catch((error) => {
            res.status(500).json({ error: error.message });
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const viewClassrooms = (req:Request, res: Response) => {
    try{
        const teacherId = parseInt(req.params.teacherId);
        getClassroomByTeacherId(teacherId).then((classrooms) => {
            res.status(200).json(classrooms);
        }).catch((error) => {
            res.status(500).json({ error: error.message });
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { addClassroom, viewClassrooms };