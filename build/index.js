"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const config_1 = require("./config");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 8081;
(0, config_1.configViewEngine)(app);
(0, routers_1.initWebRoutes)(app);
(0, routers_1.userRoutes)(app);
app.listen(port, () => {
    console.log(`Server running on port: ${port}, http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map