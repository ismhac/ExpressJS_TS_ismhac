import { DataTypes } from "sequelize";
import { sequelize, Sequelize } from '../base'

export const Notes = sequelize.define(
    'tbl_notes', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: 'tbl_users',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING
    }
}
)