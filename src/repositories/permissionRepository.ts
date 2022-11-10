import { DataSource } from "typeorm";

import {IPermission} from "../models/Permission";
import {IResult, ResultOk, ResultError} from "../shared/Result";
import {Err} from "../shared/Err";
import {IOutputResult} from "../shared/SqlResult";
import {Permission} from "../typeorm/entities/Permission";



export default class PermissionRepository
{
    private readonly ds:DataSource;

    constructor(ds:DataSource) {
        this.ds = ds;
    }

    /**
     * Get a permission list
     */
    async getPermissions(): Promise<IResult<Permission[]>> {
        // let permissions = [] as IPermission[];
        let permissions = [] as Permission[];

        // This do not have intellisense
        permissions = await this.ds
            .getRepository(Permission)
            .createQueryBuilder(`p`)
            .take(10)
            .skip(0)
            .getMany();

        // This have intellisense
        await this.ds
            .getRepository(Permission)
            .find({where:{name:`P`}});

        // const inValues = [0,0,null,null];
        // const r = await db.call("sp_permissions_readlist",inValues,["@result"], this.pool);
        // const callResult = r.getOutputVal<IOutputResult>("@result");
        //
        // if (!callResult.success) {
        //     return new ResultError<IPermission[]>(
        //         new Err(callResult.msg, "sp_permissions_readlist", callResult.errorLogId.toString())
        //     );
        // }

        // permissions = r.getData<IPermission>(0);
        return new ResultOk<Permission[]>(permissions);
    }

    /** Create a permission */
    async createPermission(p:IPermission): Promise<IResult<IPermission>> {
        let permission: IPermission|undefined;

        // const inValues = [JSON.stringify(p)];
        // const r = await db.call("sp_permissions_create", inValues,["@result"], this.pool);
        // const callResult  = r.getOutputVal<IOutputResult>("@result");
        //
        // if (!callResult.success) {
        //     return new ResultError(
        //         new Err(callResult.msg, "sp_permissions_create", callResult.errorLogId.toString())
        //     )
        // }

        // permission = r.getData<IPermission>(0)[0];
        return new ResultOk(permission);
    }

    /** Delete a permission */
    async deletePermission(pName:string): Promise<IResult<IPermission>> {
        let permission: IPermission|undefined;

        // const inValues = [pName];
        // const r = await db.call("sp_permissions_delete", inValues,["@result"], this.pool);
        // const callResult  = r.getOutputVal<IOutputResult>("@result");
        //
        // if (!callResult.success) {
        //     return new ResultError(
        //         new Err(callResult.msg, "sp_permissions_delete", callResult.errorLogId.toString())
        //     )
        // }

        // permission = r.getData<IPermission>(0)[0];
        return new ResultOk(permission);
    }

    /** Get a permission */
    async getPermission(pName:string): Promise<IResult<IPermission>> {
        let permission: IPermission|undefined;

        // const inValues = [pName];
        // const r = await db.call("sp_permissions_read", inValues,["@result"], this.pool);
        // const callResult  = r.getOutputVal<IOutputResult>("@result");
        //
        // if (!callResult.success) {
        //     return new ResultError(
        //         new Err(callResult.msg, "sp_permissions_read", callResult.errorLogId.toString())
        //     )
        // }
        //
        // permission = r.getData<IPermission>(0)[0];
        return new ResultOk(permission);
    }

    /** Update a permission */
    async updatePermission(pName:string, p:IPermission): Promise<IResult<IPermission>> {
        let permission: IPermission|undefined;

        // const inValues = [pName, JSON.stringify(p)];
        // const r = await db.call("sp_permissions_update", inValues,["@result"], this.pool);
        // const callResult  = r.getOutputVal<IOutputResult>("@result");
        //
        // if (!callResult.success) {
        //     return new ResultError(
        //         new Err(callResult.msg, "sp_permissions_update", callResult.errorLogId.toString())
        //     )
        // }
        //
        // permission = r.getData<IPermission>(0)[0];
        return new ResultOk(permission);
    }
}
