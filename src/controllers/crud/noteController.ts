import { CrudController } from "../crudController";
import { sequelize } from "../../models";
import { noteService } from "../../services";
import { Request, Response } from "express"

export class NoteController extends CrudController<typeof noteService>{
    constructor() {
        super(noteService)
    }

    async getListNotes(req: Request, res: Response) {
        try {
            const listNotes = await this.service.getList()

            console.log(listNotes);
            console.log(">>> Check: ", listNotes.rows)

            return res.render("notesPage.ejs", { notes: listNotes.rows })
        } catch (error) {
            console.log(error);
        }
    }

    async getListNotesByUserId(req: Request, res: Response) {
        try {
            const user_id = req.params["user_id"]
            const listNotes = await this.service.getListNotesByUserId({ user_id: user_id })
            console.log(listNotes);
            res.send(listNotes)
        } catch (error) {
            console.log(error);
        }
    }

    async createNewNote(req: Request, res: Response) {
        const newNote = req.body
        const transaction = await sequelize.transaction()
        try {
            if (newNote) {
                const transaction = await sequelize.transaction();
                await this.service.create(newNote, { transaction, scope: ['defaultScope'] })
                await transaction.commit()
                return res.redirect("/notes")
            }
        } catch (error) {
            console.log(error)
            await transaction.rollback()
        }
    }

    async getEditPage(req: Request, res: Response) {
        let noteId = req.params["id"]
        let note = await this.service.getItem({ where: { id: noteId }, scope: ['defaultScope'] })
        // console.log(user);
        return res.render("updateNote.ejs", { dataNote: note })
    }

    async updateNote(req: Request, res: Response) {
        const infoUpdateNote = req.body
        await this.service.update(infoUpdateNote, { where: { id: infoUpdateNote.id }, scope: ['defaultScope'] })
        return res.redirect("/notes")
    }
}