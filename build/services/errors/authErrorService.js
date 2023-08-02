"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthExceptionService = void 0;
const base_1 = require("./base");
const enum_1 = require("../../common/enum");
class AuthErrorsService extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 401,
            type: key,
            message
        });
    }
}
class AuthExceptionService {
    unAuthorized() {
        return new AuthErrorsService(enum_1.AuthException.UNAUTHORIZED, null, enum_1.HttpStatus.UNAUTHORIZED);
    }
    permissionDeny() {
        return new AuthErrorsService(enum_1.AuthException.PERMISSION_DENY, null, enum_1.HttpStatus.FORBIDDEN);
    }
    badToken() {
        return new AuthErrorsService(enum_1.AuthException.BAD_TOKEN, null, enum_1.HttpStatus.FORBIDDEN);
    }
    tokenExpired() {
        return new AuthErrorsService(enum_1.AuthException.TOKEN_EXPIRED, null, enum_1.HttpStatus.FORBIDDEN);
    }
    customError(message, code) {
        return new AuthErrorsService(enum_1.AuthException.CUSTOM, message, code);
    }
    badRefreshToken() {
        return new AuthErrorsService(enum_1.AuthException.BAD_REFRESH_TOKEN, 'Bad Refresh Token', enum_1.HttpStatus.CONFLICT);
    }
    refreshTokenExpired() {
        return new AuthErrorsService(enum_1.AuthException.TOKEN_EXPIRED, 'Refresh Token Expired', enum_1.HttpStatus.CONFLICT);
    }
}
exports.AuthExceptionService = AuthExceptionService;
//# sourceMappingURL=authErrorService.js.map