import { Request, Response } from "express";
import { getClassroomByStudentId } from "../queries/classroom.queries";
import { getTasksByClassroomId } from "../queries/task.queries";

const viewStudentClassrooms = (req: Request, res: Response) => {
    try {
        const studentId = parseInt(req.params.studentId);
        getClassroomByStudentId(studentId).then((classrooms) => {
            res.status(200).json(classrooms);
        }).catch((error) => {
            res.status(500).json({ error: error.message });
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const viewStudentTasks = (req: Request, res: Response) => {
    try {
        const classroomId = parseInt(req.params.classroomId);
        getTasksByClassroomId(classroomId).then((tasks) => {
            res.status(200).json(tasks);
        }).catch((error) => {
            res.status(500).json({ error: error.message });
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}


export { viewStudentClassrooms, viewStudentTasks };