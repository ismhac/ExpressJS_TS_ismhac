"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const base_1 = require("../base");
exports.Users = base_1.sequelize.define('tbl_users', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV1,
        primaryKey: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    }
});
//# sourceMappingURL=users.js.map