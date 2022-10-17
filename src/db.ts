import { Engine } from './entities/Engine';
import { DataSource } from "typeorm";

/* export const AppDataSource = new DataSource({
   type: 'postgres',
   host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
   port: 5432,
   username: 'qhptqnnseznsiy',
   password: '56ac2b1499daeb847ccf1a7a34ed0eff9beb627dc624ad6736d0620a25ba9d8e',
   database: 'd7u43ie29ie6m',
   synchronize: true,
   logging: true,
   entities: [],
   migrationsTableName: 'CreateAreas'
}) */

export const AppDataSource = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: '1234',
   database: 'order-helperDB',
   synchronize: true,
   logging: true,
   entities: [Engine],
   migrationsTableName: 'CreateAreas'
})