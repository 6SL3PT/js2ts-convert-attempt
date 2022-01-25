import { Request, Response, NextFunction } from 'express';
import moment from 'moment';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${moment().format()}: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}