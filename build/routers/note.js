"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouters = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
let noteRouters = (app) => {
    app.get("/notes", (req, res) => { controllers_1.noteController.getListNotes(req, res); });
    app.use("/notes", router);
};
exports.noteRouters = noteRouters;
//# sourceMappingURL=note.js.map