"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("./tables");
tables_1.Notes.belongsTo(tables_1.Users, {
    foreignKey: 'user_id',
    as: 'users'
});
tables_1.Users.hasMany(tables_1.Notes, {
    foreignKey: 'user_id',
    as: 'notes'
});
//# sourceMappingURL=associates.js.map