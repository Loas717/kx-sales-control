const { Venda } = require('../models');

module.exports = {
    async findAll(req, res) {
        try {
            const venda = await Venda.findAll(); 
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar vendas', details: error.message });
        }
    },
    async findOne(req, res) {
        const { ID } = req.params; 
        try {
            const venda = await Venda.findAll({ 
                where: { id: ID } 
            });

            if (venda === 0) {
                return res.status(404).json({ error: 'Venda não encontrado' });
            }

            res.status(200).json(venda); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao encontrar Venda' });
        }
    },
    async create(req, res) {
        const { clienteId, total } = req.body;
        try {
            const venda = await Venda.create({ clienteId, total, dataVenda: new Date() });
            res.status(201).json(venda);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar venda', details: error.message });
        }
    },
    async delete(req, res) {
        const { ID } = req.params; 
        try {
            const venda = await Venda.destroy({ 
                where: { id: ID } 
            });

            if (venda === 0) {
                return res.status(404).json({ error: 'Venda não encontrada' });
            }

            res.status(200).json(venda); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao apagar venda' });
        }
    },
    async update(req, res) {
        const { ID } = req.params; 
        const newData = req.body;
        try {
            const venda = await Venda.update(newData,{ 
                where: { id: ID } 
            });

            if (venda === 0) {
                return res.status(404).json({ error: 'Venda não encontrada' });
            }

            res.status(200).json(venda); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar venda' });
        }
    },
};