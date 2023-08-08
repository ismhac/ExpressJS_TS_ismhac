
import { CrudService } from "../crudService.pg"
import { Notes } from "../../models"
import { raw } from "express"

export class NoteService extends CrudService<typeof Notes>{
    constructor() {
        super(Notes)
    }

    async getListNotesByUserId(params: { user_id: String }) {
        let listNotes = await this.model.findAll({
            where: {
                user_id: params.user_id
            },
            attributes: ["id", "user_id", "title", "content"],
            raw: true
        })
        return listNotes
    }
}