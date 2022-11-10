import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm"

export class addPermission1667997076081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: `permission`,
                columns: [
                    new TableColumn({name: "name", type: `varchar`, length:`100`, isPrimary: true}),
                    new TableColumn({name: "description", type: `varchar`, length: `1000`}),
                ]
            }));
        console.log('up');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`permission`);
        console.log('down');
    }

}
