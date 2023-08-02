"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configViewEngine = exports.config = void 0;
const viewEngine_config_1 = require("./viewEngine.config");
Object.defineProperty(exports, "configViewEngine", { enumerable: true, get: function () { return viewEngine_config_1.configViewEngine; } });
const development_1 = __importDefault(require("./development"));
const production_1 = __importDefault(require("./production"));
require('dotenv').config();
let getConfig = (environment) => {
    if (environment === "development") {
        return development_1.default;
    }
    else if (environment === "production") {
        return production_1.default;
    }
    else {
        return development_1.default;
    }
};
const config = getConfig(process.env.NODE_ENV);
exports.config = config;
//# sourceMappingURL=index.js.map