"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const models_1 = require("../../models");
const crudService_pg_1 = require("../crudService.pg");
class UserService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.Users);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map