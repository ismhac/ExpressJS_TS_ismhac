'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'tbl_users', {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV1,
          primaryKey: true
        },
        first_name: {
          type: Sequelize.DataTypes.STRING,
        },
        last_name: {
          type: Sequelize.DataTypes.STRING,
        }
      }
      )
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('tbl_users', transaction)
    })
  }
};
