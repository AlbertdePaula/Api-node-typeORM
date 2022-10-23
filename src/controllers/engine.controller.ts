import { Request, Response } from "express-serve-static-core"

export const createEngine = (req: Request, res: Response) =>  {
    res.send('hello nega');
};