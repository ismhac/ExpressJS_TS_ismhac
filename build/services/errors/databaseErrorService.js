"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseExceptionService = void 0;
const base_1 = require("./base");
const enum_1 = require("../../common/enum");
class DatabaseErrorService extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 500,
            type: `database_exception_${key}`,
            message,
        });
    }
}
class DatabaseExceptionService {
    recordNotFound() {
        return new DatabaseErrorService(enum_1.AppExceptionType.RECORD_NOT_FOUND, null, enum_1.HttpStatus.NOT_FOUND);
    }
    queryFail(message) {
        return new DatabaseErrorService(enum_1.AppExceptionType.QUERY_FAIL, message);
    }
    customError(message = enum_1.AppExceptionType.CUSTOM, code) {
        return new DatabaseErrorService(enum_1.AppExceptionType.CUSTOM, message, code);
    }
    invalidScope(message) {
        return new DatabaseErrorService(enum_1.AppExceptionType.INVALID_SCOPE, message, enum_1.HttpStatus.FORBIDDEN);
    }
}
exports.DatabaseExceptionService = DatabaseExceptionService;
//# sourceMappingURL=databaseErrorService.js.map