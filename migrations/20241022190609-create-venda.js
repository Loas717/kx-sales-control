'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Vendas', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            dataVenda: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            total: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            clienteId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Clientes',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL', 
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'), 
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'), 
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Vendas');
    }
};
