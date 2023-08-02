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
exports.UserController = void 0;
const services_1 = require("../../services");
const crudController_1 = require("../crudController");
class UserController extends crudController_1.CrudController {
    constructor() {
        super(services_1.userService);
    }
    getResultAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this && this.service) {
                    const result = yield this.service.getListUsers();
                    if (result) {
                        console.log("========================================");
                        result.rows.forEach(function (row) {
                            console.log(row);
                        });
                        console.log("========================================");
                    }
                    return res.render("usersPage.ejs", { users: result.rows });
                }
                else {
                    res.send(typeof (this));
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map