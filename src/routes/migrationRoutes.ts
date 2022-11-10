import {Router} from "express";

import * as MigrationController from "../controllers/migrationController";

const router = Router();

/* Synchronize database schema. */
router.get('/synchronize', MigrationController.synchronize);

/* Runs all pending migrations. */
router.get('/run-migrations/:transaction/:fake', MigrationController.runMigrations);

/* Reverts last executed migration. */
router.get('/undo-last-migration', MigrationController.undoLastMigration);

export default router;
