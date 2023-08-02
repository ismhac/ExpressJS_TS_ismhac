"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorService = void 0;
const errors_1 = require("./errors");
const errors_2 = require("./errors");
class ErrorService {
    constructor() {
        this.router = new errors_1.RouterExceptionService();
        this.auth = new errors_2.AuthExceptionService();
        this.database = new errors_1.DatabaseExceptionService();
    }
}
exports.ErrorService = ErrorService;
//# sourceMappingURL=errorService.js.map