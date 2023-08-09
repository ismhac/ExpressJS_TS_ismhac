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
            const listNotes = await this.service.getListNotes()
            console.log(listNotes);
            return res.render("notesPage.ejs", { notes: listNotes })
        } catch (error) {
            console.log(error);
        }
    }

    async getListNotesByUserId(req: Request, res: Response) {
        try {
            const user_id = req.params["user_id"]
            const listNotes = await this.service.getListNotesByUserId({ user_id: user_id })
            console.log(listNotes);
            res.render("noteOfUser.ejs", { notes: listNotes })
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

        return res.render("updateNote.ejs", { dataNote: note })
    }

    async updateNote(req: Request, res: Response) {
        const infoUpdateNote = req.body
        const transaction = await sequelize.transaction()
        try {
            await this.service.update(infoUpdateNote, { where: { id: infoUpdateNote.id }, scope: ['defaultScope'], transaction })
            await transaction.commit()
            return res.redirect("/notes")
        } catch (error) {
            console.log(error);
            transaction.rollback()
        }
    }

    async deleteNote(req: Request, res: Response) {
        // let { userId } = req.body
        const transaction = await sequelize.transaction()
        try {
            await this.service.delete({ where: { id: req.body["id"] }, scope: ['defaultScope'], transaction })
            await transaction.commit()
            return res.redirect("/notes")
        } catch (error) {
            console.log(error);
            transaction.rollback()
        }
    }
}