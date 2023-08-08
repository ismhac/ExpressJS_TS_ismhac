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
const services_1 = require("../../services");
class NoteController extends crudController_1.CrudController {
    constructor() {
        super(services_1.noteService);
    }
    getListNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listNotes = this.service.getList();
                console.log(">>> check result: ", listNotes);
                return res.send(`${listNotes}`);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=noteController.js.map