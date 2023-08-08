"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteService = exports.userService = exports.errorService = exports.CrudService = void 0;
const noteService_1 = require("./crud/noteService");
const userService_1 = require("./crud/userService");
const crudService_1 = require("./crudService");
Object.defineProperty(exports, "CrudService", { enumerable: true, get: function () { return crudService_1.CrudService; } });
const errorService_1 = require("./errorService");
const errorService = new errorService_1.ErrorService();
exports.errorService = errorService;
const userService = new userService_1.UserService();
exports.userService = userService;
const noteService = new noteService_1.NoteService;
exports.noteService = noteService;
//# sourceMappingURL=index.js.map