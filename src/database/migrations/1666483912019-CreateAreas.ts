import { Engine } from '../../entity/Engine';
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
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type:"varchar",
                    },
                    {
                        name: "current",
                        type:"varchar",
                    },
                    {
                        name: "power",
                        type:"varchar",
                    },
                    {
                        name: "rpm",
                        type:"varchar",
                    },
                    {
                        name: "area",
                        type: "varchar"
                    },
                    {
                        name: "createdFor",
                        type: "varchar"
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
