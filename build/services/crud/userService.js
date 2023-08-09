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
exports.UserService = void 0;
const models_1 = require("../../models");
const crudService_pg_1 = require("../crudService.pg");
class UserService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.Users);
    }
    getInfoUserAndNumberofNote() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.model.findAll({
                include: [
                    {
                        association: "notes",
                        attributes: []
                    }
                ],
                attributes: [
                    [models_1.sequelize.literal('tbl_users.id'), 'id'],
                    'first_name',
                    'last_name',
                    [models_1.sequelize.fn('COUNT', models_1.sequelize.col('notes.user_id')), 'n_notes']
                ],
                group: ["tbl_users.id", "first_name", "last_name"],
                raw: true
            });
            return result;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map