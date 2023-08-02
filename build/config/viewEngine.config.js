"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configViewEngine = void 0;
let configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
};
exports.configViewEngine = configViewEngine;
//# sourceMappingURL=viewEngine.config.js.map