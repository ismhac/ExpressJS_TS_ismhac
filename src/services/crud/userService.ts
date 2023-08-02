
import { Users } from "../../models";
import { CrudService } from "../crudService.pg";
import { ICrudOption } from "@/interfaces";
// import { Request, Response } from "express";

export class UserService extends CrudService<typeof Users>{
    constructor() {
        super(Users)
    }

    getAllUsers = async (option?: ICrudOption) => {
        try {
            let result = await this.model.findAll();
            return result
        } catch (error) {
            console.log(error);
        }
    }

    async getListUsers(option?: ICrudOption) {
        return this.getList(option);
    }


}

