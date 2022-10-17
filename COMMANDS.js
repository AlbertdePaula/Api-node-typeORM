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