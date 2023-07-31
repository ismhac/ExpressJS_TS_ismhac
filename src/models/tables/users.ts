import { DataTypes } from "sequelize";
import { sequelize, Sequelize } from '../base';

export const Users = sequelize.define(
    'tbl_users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    }
}
)