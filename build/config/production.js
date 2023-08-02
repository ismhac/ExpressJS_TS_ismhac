"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sql = require('./sequelize.config');
exports.default = {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: true,
        name: 'LOCAL NAME',
        port: process.env.PORT || 8081,
        secret: process.env.SERVER_SECRET
    },
    database: {
        mongo: process.env.MONGODB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.development
    }
};
//# sourceMappingURL=production.js.map