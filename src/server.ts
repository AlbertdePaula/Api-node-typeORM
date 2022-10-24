import "reflect-metadata";
import app from './app'
import { AppDataSource } from "./db";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log ("Database conected!")
        app.listen(3000);
        console.log('Servidor tá rodando na porta 3000');
    }
    catch (error) {
        console.error(`erro aqui: ${error}`);
    }
}
main();

