import "reflect-metadata";
import express from "express";
import { AppdDataSource } from "./db";

const port = 3000;
const app = express();

async function main() {
    try {
        await AppdDataSource.initialize();
        app.listen(port);
        console.log(`Servidor tá rodando na porta ${port}`);
    } catch (error) {
        console.log('error')
    }
}


