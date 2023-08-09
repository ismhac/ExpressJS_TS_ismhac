
import { CrudService } from "../crudService.pg"
import { Notes } from "../../models"
import { raw } from "express"
import { Association } from "sequelize"

export class NoteService extends CrudService<typeof Notes>{
    constructor() {
        super(Notes)
    }

    async getListNotes() {
        let result = await this.model.findAll({
            include: [
                {
                    association: "users",
                    attributes: ["first_name", "last_name"]
                }
            ],
            attributes: ["id", "user_id", "title", "content"],
            raw: true
        })
        return result
    }

    async getListNotesByUserId(params: { user_id: String }) {
        let listNotes = await this.model.findAll({
            where: {
                user_id: params.user_id
            },
            include: [
                {
                    association: "users",
                    attributes: ["first_name", "last_name"]
                }
            ],
            attributes: ["id", "user_id", "title", "content"],
            raw: true
        })
        return listNotes
    }


}