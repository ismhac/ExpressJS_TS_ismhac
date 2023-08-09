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
const models_1 = require("../../models");
const services_2 = require("../../services");
class UserController extends crudController_1.CrudController {
    constructor() {
        super(services_1.userService);
    }
    getResultAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.getInfoUserAndNumberofNote();
                return res.render("usersPage.ejs", { users: result });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            const transaction = yield models_1.sequelize.transaction();
            try {
                if (newUser) {
                    const transaction = yield models_1.sequelize.transaction();
                    yield this.service.create(newUser, { transaction, scope: ['defaultScope'] });
                    yield transaction.commit();
                    return res.redirect("/users");
                }
            }
            catch (error) {
                console.log(error);
                yield transaction.rollback();
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield models_1.sequelize.transaction();
            try {
                yield services_2.noteService.deleteAll({ where: { user_id: req.body["userId"] }, scope: ['defaultScope'] });
                yield this.service.delete({ where: { id: req.body["userId"] }, scope: ['defaultScope'], transaction });
                yield transaction.commit();
                return res.redirect("/users");
            }
            catch (error) {
                console.log(error);
                transaction.rollback();
            }
        });
    }
    getEditPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params["id"];
            let user = yield this.service.getItem({ where: { id: userId }, scope: ['defaultScope'] });
            return res.render("updateUser.ejs", { dataUser: user });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoUpdateUser = req.body;
            const transaction = yield models_1.sequelize.transaction();
            try {
                yield this.service.update(infoUpdateUser, { where: { id: infoUpdateUser.id }, scope: ['defaultScope'], transaction });
                yield transaction.commit();
                return res.redirect("/users");
            }
            catch (error) {
                console.log(error);
                transaction.rollback();
            }
        });
    }
    getCreateNotePage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params["id"];
            return res.render("createNewNote.ejs", { userId: userId });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map