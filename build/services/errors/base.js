"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(options) {
        super();
        if (!options.message) {
            options.message = options.type;
        }
        this.options = options;
    }
    toJSON() {
        return this.options;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base.js.map