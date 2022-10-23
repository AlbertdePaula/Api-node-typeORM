import { Engine } from './../../entities/Engine';
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAreas1666483912019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"engines",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tag",
                        type: "string",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type:"string",
                    },
                    {
                        name: "current",
                        type:"string",
                    },
                    {
                        name: "power",
                        type:"string",
                    },
                    {
                        name: "rpm",
                        type:"string",
                    },
                    {
                        name: "creted_at",
                        type:"timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type:"timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable ("engines")
    }

}
