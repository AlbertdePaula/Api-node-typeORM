import { Router } from "express";
import { createEngine } from "../controllers/engine.controller";

const router = Router();

router.post("/engines", createEngine);

export default router;