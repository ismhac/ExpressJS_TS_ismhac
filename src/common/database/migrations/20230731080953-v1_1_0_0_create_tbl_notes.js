'use strict';

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
        'tbl_notes', {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV1,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: 'tbl_users',
            key: 'id'
          }
        },
        title: {
          type: Sequelize.DataTypes.STRING
        },
        content: {
          type: Sequelize.DataTypes.STRING
        },
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
      await queryInterface.dropTable('tbl_notes', transaction);
    })
  }
};
