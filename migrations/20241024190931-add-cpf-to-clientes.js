'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Clientes', 'cpf', {
      type: Sequelize.STRING, // Adjust the data type as needed
      allowNull: false, // Set to false if you want to make it required
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Clientes', 'cpf');
  },
};