import { sql } from '../config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    sql.development.database,
    sql.development.username,
    sql.development.password,
    sql.development.host,
)

export {
    sequelize,
    Sequelize
}