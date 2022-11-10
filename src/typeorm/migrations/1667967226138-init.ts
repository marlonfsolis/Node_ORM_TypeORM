import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
    TableColumn,
    TableForeignKey,} from "typeorm";

export class init1667967226138 implements MigrationInterface {
    name = 'init1667967226138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.createTable(
            new Table({
                name: `user`,
                columns: [
                    new TableColumn({name: "id", type: `integer`, isPrimary: true}),
                    new TableColumn({name: "first_name", type: `varchar(100)`}),
                    new TableColumn({name: "last_name", type: `varchar(100)`}),
                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
