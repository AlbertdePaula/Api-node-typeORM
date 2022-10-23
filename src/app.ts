import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import engineRoutes from "./routes/engine.routes";

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(engineRoutes);

export default app;