"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const sequelize_1 = require("sequelize");
const base_1 = require("../base");
exports.Notes = base_1.sequelize.define('tbl_notes', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV1,
        primaryKey: true
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: 'tbl_users',
            key: 'id'
        }
    },
    titles: {
        type: sequelize_1.DataTypes.STRING,
    },
    content: {
        type: sequelize_1.DataTypes.STRING
    }
});
//# sourceMappingURL=notes.js.map