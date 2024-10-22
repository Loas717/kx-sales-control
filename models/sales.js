module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define('Venda', {
        dataVenda: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    Venda.associate = (models) => {
        Venda.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    };

    return Venda;
};