"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthException = void 0;
var AuthException;
(function (AuthException) {
    AuthException["BAD_TOKEN"] = "BAD_TOKEN";
    AuthException["BAD_REFRESH_TOKEN"] = "BAD_REFRESH_TOKEN";
    AuthException["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
    AuthException["UNAUTHORIZED"] = "UNAUTHORIZED";
    AuthException["PERMISSION_DENY"] = "PERMISSION_DENY";
    AuthException["INVALID_LOGIN_CREDENTIALS"] = "INVALID_LOGIN_CREDENTIALS";
    AuthException["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    AuthException["EMAIL_EXIST"] = "EMAIL_EXIST";
    AuthException["CUSTOM"] = "CUSTOM";
})(AuthException || (exports.AuthException = AuthException = {}));
//# sourceMappingURL=auth_exception.enum.js.map