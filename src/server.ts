import "reflect-metadata";
import express from "express";

const port = 3000;
const app = express();

app.listen(port, () => console.log (`Servidor tá rodando na porta ${port}`));