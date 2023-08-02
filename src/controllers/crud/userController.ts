import { UserService } from "@/services/crud/userService";
import { userService } from "../../services";
import { CrudController } from "../crudController";
import { Request, Response } from "express"

export class UserController extends CrudController<typeof userService> {
    constructor() {
        super(userService)

    }

    async getResultAllUsers(req: Request, res: Response) {

        try {
            if (this && this.service) {
                // const result = await this.service.getAllUsers();
                const result = await this.service.getListUsers()

                if (result) {
                    console.log("========================================");
                    result.rows.forEach(function (row: any) {
                        console.log(row);
                    });
                    console.log("========================================");
                }

                // const result = await userService.getAllUsers();
                return res.render("usersPage.ejs", { users: result.rows })
            } else {
                res.send(typeof (this))
            }
        } catch (error) {
            console.log(error);
        }
    }
}
