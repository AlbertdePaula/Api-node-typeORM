import { Router } from "express";
import { createEngine } from "../controllers/engine.controller";

const router = Router();

router.get("/engines", createEngine);

export default router;