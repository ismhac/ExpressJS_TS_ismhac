"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = exports.sequelize = void 0;
const config_1 = require("../config");
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
let option;
if (process.env.NODE_ENV === 'production') {
    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        pool: {
            max: 10,
            min: 0,
            idle: 200000,
            acquire: 1000000,
        },
        logging: false,
        timezone: "+07:00",
        dialectOptions: {
            "ssl": {
                "require": false,
                "rejectUnauthorized": false,
            }
        }
    };
}
else {
    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        logging: false,
        timezone: "+07:00",
        dialectOptions: {
            "ssl": {
                "require": false,
                "rejectUnauthorized": false
            }
        }
    };
}
if (config_1.config.database.sql['host'] === "localhost" || config_1.config.database.sql['host'] === "127.0.0.1") {
    if (option.hasOwnProperty('dialectOptions')) {
        delete option.dialectOptions;
    }
}
const sequelize = new sequelize_1.Sequelize(config_1.config.database.sql['database'], config_1.config.database.sql['username'], config_1.config.database.sql['password'], Object.assign({}, option));
exports.sequelize = sequelize;
//# sourceMappingURL=base.pg.js.map