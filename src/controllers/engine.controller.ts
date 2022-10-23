import { Engine } from './../entities/Engine';
import { Request, Response } from "express-serve-static-core"

export const createEngine = (req: Request, res: Response) =>  {
    const {tag, description, current, power, rpm} = req.body;

    const engine = new Engine;
    engine.tag = tag;
    engine.description = description;
    engine.current = current;
    engine.power = power;
    engine.rpm = rpm;

    console.log(engine);

    res.send(engine);
};