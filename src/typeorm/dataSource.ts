import { DataSource } from "typeorm";

import {Configuration as config} from '../utils/configuration';

const dataSource = new DataSource({
    type: "mysql",
    port: 3306,
    /*
    * To use migrate:generate and migrate:run we need to use process.env.Var
    * But I create an end point that uses Migration API. This way we can use config files.
    * Still we need to use migrate:create and not migrate:generate. The generate one will try to use the connection.
    * */
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.NODE_ORM_TYPEORM_DBNAME,
    // host: config.db.host,
    // username: config.db.username,
    // password: config.db.password,
    // database: config.db.name,
    entities: ["src/typeorm/entities/*.js", "src/typeorm/entities/*.ts"],
    migrations: ["src/typeorm/migrations/*.js", "src/typeorm/migrations/*.ts"],
    logging: true,
    synchronize: false,
});

export default dataSource;
