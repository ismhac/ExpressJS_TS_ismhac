import express, { Application } from "express"
import { noteController } from "../controllers"

const router = express.Router();
let noteRouters = (app: Application) => {
    app.get("/notes", (req, res) => noteController.getListNotes(req, res))
    app.get("/users/:user_id/notes", (req, res) => noteController.getListNotesByUserId(req, res))
    app.post("/users/:user_id/notes", (req, res) => noteController.createNewNote(req, res))

    app.get("/edit-note/:id", (req, res) => noteController.getEditPage(req, res))
    app.post("/update-note", (req, res) => noteController.updateNote(req, res))

    app.use("/notes", router)
}

export {
    noteRouters
}