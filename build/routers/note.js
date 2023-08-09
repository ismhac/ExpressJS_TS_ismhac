"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouters = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
let noteRouters = (app) => {
    app.get("/notes", (req, res) => controllers_1.noteController.getListNotes(req, res));
    app.get("/users/:user_id/notes", (req, res) => controllers_1.noteController.getListNotesByUserId(req, res));
    app.post("/users/:user_id/notes", (req, res) => controllers_1.noteController.createNewNote(req, res));
    app.get("/edit-note/:id", (req, res) => controllers_1.noteController.getEditPage(req, res));
    app.post("/update-note", (req, res) => controllers_1.noteController.updateNote(req, res));
    app.post("/delete-note", (req, res) => controllers_1.noteController.deleteNote(req, res));
    app.use("/notes", router);
};
exports.noteRouters = noteRouters;
//# sourceMappingURL=note.js.map