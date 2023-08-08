import { userService } from "../../services";
import { CrudController } from "../crudController";
import { Request, Response } from "express"
import { sequelize } from "../../models";



export class UserController extends CrudController<typeof userService> {
    constructor() {
        super(userService)
    }

    async getResultAllUsers(req: Request, res: Response) {
        try {
            const result = await this.service.getList()
            // console.log(result);
            return res.render("usersPage.ejs", { users: result.rows })
        } catch (error) {
            console.log(error);
        }
    }

    async createNewUser(req: Request, res: Response) {
        const newUser = req.body
        const transaction = await sequelize.transaction()
        try {
            if (newUser) {
                const transaction = await sequelize.transaction();
                await this.service.create(newUser, { transaction, scope: ['defaultScope'] })
                await transaction.commit()
                return res.redirect("/users")
            }
        } catch (error) {
            console.log(error)
            await transaction.rollback()
        }
    }

    async deleteUser(req: Request, res: Response) {
        // let { userId } = req.body
        const transaction = await sequelize.transaction()
        try {
            await this.service.delete({ where: { id: req.body["userId"] }, scope: ['defaultScope'] })
            return res.redirect("/users")
        } catch (error) {
            console.log(error);
            transaction.rollback()
        }
    }

    async getEditPage(req: Request, res: Response) {
        let userId = req.params["id"]
        let user = await this.service.getItem({ where: { id: userId }, scope: ['defaultScope'] })
        // console.log(user);
        return res.render("updateUser.ejs", { dataUser: user })
    }

    async updateUser(req: Request, res: Response) {
        const infoUpdateUser = req.body
        const transaction = await sequelize.transaction()
        try {
            await this.service.update(infoUpdateUser, { where: { id: infoUpdateUser.id }, scope: ['defaultScope'] })
            return res.redirect("/users")
        } catch (error) {
            console.log(error);
            transaction.rollback()
        }
    }

    async getCreateNotePage(req: Request, res: Response) {
        let userId = req.params["id"]
        return res.render("createNewNote.ejs", { userId: userId })
    }
}
