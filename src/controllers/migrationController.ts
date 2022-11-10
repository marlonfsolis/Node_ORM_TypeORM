import {Request, Response} from "express";
import {
    HttpResponseOk
} from "../shared/HttpResponse";
import {Transaction} from "../shared/Types";
import {debug} from '../startup/debuggers';


/** Synchronize database schema. */
export const synchronize = async (req:Request, res:Response) => {
    const ds = req.app.locals.ds;
    await ds.synchronize();
    return new HttpResponseOk(res, `Synchronization done.`);
};


/** Runs all pending migrations. */
export const runMigrations = async (req:Request, res:Response) => {
    const ds = req.app.locals.ds;
    const transaction = req.params.transaction as Transaction || `all`;
    const fake = req.params.fake === `true`;

    console.log(req.params.fake, fake);
    await ds.runMigrations({transaction, fake});

    return new HttpResponseOk(res, `Migrations ran.`);
};


/** Reverts last executed migration. */
export const undoLastMigration = async (req:Request, res:Response) => {
    const ds = req.app.locals.ds;
    await ds.undoLastMigration();

    return new HttpResponseOk(res, `Migrations ran.`);
};
