import { DataSource } from "typeorm";

export const AppdDataSource = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: 'postgres',
   database: 'engines',
   synchronize: true,
   //logging: true,
   //entities: [User],
   migrationsTableName: "CreateAreas" 
})