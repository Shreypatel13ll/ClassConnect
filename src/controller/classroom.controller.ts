import { Request, Response } from "express";
import { addStudentToClassroom, removeStudentFromClassroom, editClassroomName, deleteClassroomById } from "../queries/classroom.queries";
import { assignTaskToClassroom } from "../queries/task.queries";

export async function addStudent(req: Request, res: Response) {
    const { studentId, classroomId } = req.params;
    try {
        const student = await addStudentToClassroom(Number(studentId), Number(classroomId));
        res.status(201).json(student);
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}

export async function removeStudent(req: Request, res: Response) {
    const { studentId, classroomId } = req.params;
    try {
        await removeStudentFromClassroom(Number(studentId), Number(classroomId));
        res.status(204).send();
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}

export async function editClassroom(req: Request, res: Response) {
    const { classroomId } = req.params;
    const { name } = req.body;
    try {
        const classroom = await editClassroomName(Number(classroomId), name);
        res.status(200).json(classroom);
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}

export async function deleteClassroom(req: Request, res: Response) {
    const { classroomId } = req.params;
    try {
        await deleteClassroomById(Number(classroomId));
        res.status(204).send();
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}

export async function assignTask(req: Request, res: Response) {
    const { classroomId } = req.params;
    const { title, description, dueDate } = req.body;
    try {
        const task = await assignTaskToClassroom(Number(classroomId), title, description, dueDate);
        res.status(201).json(task);
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}
