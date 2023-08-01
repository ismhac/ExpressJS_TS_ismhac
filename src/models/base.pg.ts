import { sql } from '../config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    sql.development.database,
    sql.development.username,
    sql.development.password,
    {
        host: sql.development.host,
        dialect: sql.development.dialect
    }

)

export {
    sequelize,
    Sequelize
}