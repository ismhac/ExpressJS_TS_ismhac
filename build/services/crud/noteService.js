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
exports.NoteService = void 0;
const crudService_pg_1 = require("../crudService.pg");
const models_1 = require("../../models");
class NoteService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.Notes);
    }
    getListNotesByUserId(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.Notes.findAll({
                where: {
                    user_id: params.user_id
                },
                attributes: ["id", "user_id", "title", "content"],
                raw: true
            });
            return result;
        });
    }
}
exports.NoteService = NoteService;
//# sourceMappingURL=noteService.js.map