import { Users } from "../../models";
import { CrudService } from "../crudService.pg";
import { Request, Response } from "express";

export class UserService extends CrudService<typeof Users>{
    constructor() {
        super(Users)
    }
    async getAllUsers(req: Request, res: Response) {
        try {
            const result = await Users.findAll();
            if (result) {
                result.forEach(user => {
                    res.render('usersPage.ejs', { users: result });
                    console.log(user.dataValues);
                })
            }
            return result
        } catch (error) {
            console.log(error);
        }
    }
}