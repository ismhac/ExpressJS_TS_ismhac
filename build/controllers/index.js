"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteController = exports.userController = exports.CrudController = void 0;
const noteController_1 = require("./crud/noteController");
const userController_1 = require("./crud/userController");
const crudController_1 = require("./crudController");
Object.defineProperty(exports, "CrudController", { enumerable: true, get: function () { return crudController_1.CrudController; } });
const userController = new userController_1.UserController();
exports.userController = userController;
const noteController = new noteController_1.NoteController();
exports.noteController = noteController;
//# sourceMappingURL=index.js.map