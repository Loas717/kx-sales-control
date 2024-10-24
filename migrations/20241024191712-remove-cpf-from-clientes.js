'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Clientes', 'CPF'); // Use the correct case if necessary
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.addColumn('Clientes', 'CPF', {
            type: Sequelize.STRING,
            allowNull: true, // Change to false if you want to enforce not-null in the future
        });
    }
};