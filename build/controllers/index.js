"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.CrudController = void 0;
const userController_1 = require("./crud/userController");
const crudController_1 = require("./crudController");
Object.defineProperty(exports, "CrudController", { enumerable: true, get: function () { return crudController_1.CrudController; } });
const userController = new userController_1.UserController();
exports.userController = userController;
//# sourceMappingURL=index.js.map