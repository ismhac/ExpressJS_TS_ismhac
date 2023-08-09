"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const crudController_1 = require("../crudController");
const models_1 = require("../../models");
const services_1 = require("../../services");
class NoteController extends crudController_1.CrudController {
    constructor() {
        super(services_1.noteService);
    }
    getListNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listNotes = yield this.service.getList();
                return res.render("notesPage.ejs", { notes: listNotes.rows });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getListNotesByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = req.params["user_id"];
                const listNotes = yield this.service.getListNotesByUserId({ user_id: user_id });
                res.render("noteOfUser.ejs", { notes: listNotes });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createNewNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNote = req.body;
            const transaction = yield models_1.sequelize.transaction();
            try {
                if (newNote) {
                    const transaction = yield models_1.sequelize.transaction();
                    yield this.service.create(newNote, { transaction, scope: ['defaultScope'] });
                    yield transaction.commit();
                    return res.redirect("/notes");
                }
            }
            catch (error) {
                console.log(error);
                yield transaction.rollback();
            }
        });
    }
    getEditPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let noteId = req.params["id"];
            let note = yield this.service.getItem({ where: { id: noteId }, scope: ['defaultScope'] });
            return res.render("updateNote.ejs", { dataNote: note });
        });
    }
    updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoUpdateNote = req.body;
            const transaction = yield models_1.sequelize.transaction();
            try {
                yield this.service.update(infoUpdateNote, { where: { id: infoUpdateNote.id }, scope: ['defaultScope'], transaction });
                yield transaction.commit();
                return res.redirect("/notes");
            }
            catch (error) {
                console.log(error);
                transaction.rollback();
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield models_1.sequelize.transaction();
            try {
                yield this.service.delete({ where: { id: req.body["id"] }, scope: ['defaultScope'], transaction });
                yield transaction.commit();
                return res.redirect("/notes");
            }
            catch (error) {
                console.log(error);
                transaction.rollback();
            }
        });
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=noteController.js.map