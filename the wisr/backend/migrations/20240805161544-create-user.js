'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      
      u_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_name: {
        type: Sequelize.STRING
      },
      u_email: {
        type: Sequelize.STRING
      },
      u_pic: {
        type: Sequelize.STRING
      },
      u_password: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};