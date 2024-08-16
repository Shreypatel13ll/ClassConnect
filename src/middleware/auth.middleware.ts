import Jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import environment from '../config/environment';

interface CustomRequest extends Request {
    user?: { id: string; role: string; };
}

export default function authMiddleware(req: CustomRequest, res: Response, next: NextFunction, roles = ['teacher', 'student']) {
    const Bearer = req.headers.authorization;
    if (!Bearer) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = Bearer.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = Jwt.verify(token, environment.JWT_SECRET) as { id: string; role: string; };
        req.user = decoded;
        if(roles.length && !roles.includes(decoded.role)) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}