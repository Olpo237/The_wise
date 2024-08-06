'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authors', {
      
      a_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      a_name: {
        type: Sequelize.STRING
      },
      story: {
        type: Sequelize.STRING
      },
      a_pic: {
        type: Sequelize.STRING
      },
     
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors');
  }
};