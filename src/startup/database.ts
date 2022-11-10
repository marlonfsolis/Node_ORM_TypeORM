import {Express} from "express";
import {dbDebug} from './debuggers';
import dataSource from "../typeorm/dataSource";


const createDbConnection = (app: Express) => {
    dbDebug("Creating database connection pool...");

    dataSource
        .initialize()
        .then(() => {
            app.locals.ds = dataSource;
            dbDebug("Data Source has been initialized!")
        })
        .catch((err) => {
            dbDebug("Error during Data Source initialization:", err)
        });
}

export default createDbConnection;
