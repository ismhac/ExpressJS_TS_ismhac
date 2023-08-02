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
exports.CrudController = void 0;
const baseController_1 = require("./baseController");
class CrudController extends baseController_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    transaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.transaction();
        });
    }
    getList(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getList(option);
        });
    }
    getItem(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getItem(option);
        });
    }
    create(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.create(params, option);
        });
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.update(params, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.delete(option);
        });
    }
    deleteAll(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteAll(option);
        });
    }
}
exports.CrudController = CrudController;
//# sourceMappingURL=crudController.js.map