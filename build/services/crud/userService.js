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
    getListUsers(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getList(option);
        });
    }
    createNewUser(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create(params, option);
        });
    }
    deleteUser(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delete(option.where);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map