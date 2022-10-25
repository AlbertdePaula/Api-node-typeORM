const commands = [
    'yarn init -y',
    'yarn tsc --init',
]

const dependencies = [
    'yarn add express',
    'yarn add typescript ts-node-dev @types/express -D',
    'yarn add typeorm reflect-metadata pg',
    
]

const docker = [
    'docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres', //Criar container Docker;
    'docker rename NOME-ANTIGO NOME-NOVO'//Renomear container Docker;
]

const typeorm = [
    'yarn typeorm migration:create ./src/database/migrations', //Criar migration;
    'yarn typeorm entity:create ./src/entity/Engine.ts', //Criar entidade
    'yarn typeorm migration:run -d ./src/db.ts', //Rodar migration
]