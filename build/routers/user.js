"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
let userRoutes = (app) => {
    app.get('/users', (req, res) => controllers_1.userController.getResultAllUsers(req, res));
    app.post("/create-new-user", (req, res) => controllers_1.userController.createNewUser(req, res));
    app.post("/delete-user", (req, res) => controllers_1.userController.deleteUser(req, res));
    app.get("/edit-user/:id", (req, res) => controllers_1.userController.getEditPage(req, res));
    app.post("/update-user", (req, res) => controllers_1.userController.updateUser(req, res));
    app.get("/users/:id/create-new-note", (req, res) => controllers_1.userController.getCreateNotePage(req, res));
    app.use('/users', router);
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.js.map