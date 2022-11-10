import { DataSource } from "typeorm";

import {IResult, ResultError} from "../shared/Result";
import {IPermission} from "../models/Permission";
import PermissionRepository from "../repositories/permissionRepository";
import {Permission} from "../typeorm/entities/Permission";

export default class PermissionService
{
    private readonly ds: DataSource;
    private readonly permRepo:PermissionRepository;

    constructor(ds:DataSource) {
        this.ds = ds;
        this.permRepo = new PermissionRepository(ds);
    }

    /**
     * Get a permission list
     */
    async getPermissions(): Promise<IResult<Permission[]>> {
        try {
            return await this.permRepo.getPermissions();
        } catch (err) {
            return ResultError.getDefaultError<Permission[]>(err,`permissionService.getPermissions`);
        }
    }


    /**
     * Create a permission
     */
    async createPermission(p:IPermission): Promise<IResult<IPermission>> {
        try {
            return await this.permRepo.createPermission(p);
        } catch (err) {
            return ResultError.getDefaultError<IPermission>(err,`permissionService.createPermission`);
        }
    }


    /**
     * Delete a permission
     */
    async deletePermission(pName:string): Promise<IResult<IPermission>> {
        try {
            return await this.permRepo.deletePermission(pName);
        } catch (err) {
            return ResultError.getDefaultError<IPermission>(err,`permissionService.deletePermission`);
        }
    }

    /**
     * Get a permission
     */
    async getPermission(pName:string): Promise<IResult<IPermission>> {
        try {
            return await this.permRepo.getPermission(pName);
        } catch (err) {
            return ResultError.getDefaultError<IPermission>(err,`permissionService.getPermission`);
        }
    }

    /**
     * Update a permission
     */
    async updatePermission(pName:string, p:IPermission): Promise<IResult<IPermission>> {
        try {
            return await this.permRepo.updatePermission(pName, p);
        } catch (err) {
            return ResultError.getDefaultError<IPermission>(err,`permissionService.getPermission`);
        }
    }
}
