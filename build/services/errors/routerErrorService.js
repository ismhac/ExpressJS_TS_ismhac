"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterExceptionService = void 0;
const base_1 = require("./base");
const enum_1 = require("../../common/enum");
class RouterErrorService extends base_1.BaseError {
    constructor(type, message, code) {
        super({
            code: code || enum_1.HttpStatus.INTERNAL_SERVER_ERROR,
            type,
            message
        });
    }
}
class RouterExceptionService {
    somethingWentWrong() {
        return new RouterErrorService(enum_1.AppExceptionType.UNEXPECTED);
    }
    badRequest() {
        return new RouterErrorService(enum_1.AppExceptionType.BAD_REQUEST, null, enum_1.HttpStatus.BAD_REQUEST);
    }
    requestDataInvalid(message) {
        return new RouterErrorService(enum_1.AppExceptionType.BAD_REQUEST, message, 403);
    }
}
exports.RouterExceptionService = RouterExceptionService;
//# sourceMappingURL=routerErrorService.js.map