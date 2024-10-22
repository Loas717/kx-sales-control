const { Cliente } = require('../models');

module.exports = {
    async findAll(req, res) {
        try {
            const clients = await Cliente.findAll(); 
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar clientes', details: error.message });
        }
    },
    async findOne(req, res) {
        const { ID } = req.params; 
        try {
            const client = await Cliente.findOne({ 
                where: { id: ID } 
            });

            if (client === 0) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            res.status(200).json(client); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao encontrar cliente' });
        }
    },
    async create(req, res) {
        console.log('Cliente Model:', Cliente); 
        const { nome, email, telefone, endereco } = req.body;
        try {
            const cliente = await Cliente.create({ nome, email, telefone, endereco });
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar cliente', details: error.message });
        }
    },
    
    async delete(req, res) {
        const { ID } = req.params; 
        try {
            const result = await Cliente.destroy({ 
                where: { id: ID } 
            });

            if (result === 0) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            res.status(200).json({ message: 'Cliente apagado com sucesso' }); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar cliente' });
        }
    },
    async update(req, res) {
        const { ID } = req.params; 
        const newData = req.body;
        try {
            const result = await Cliente.update(newData,{ 
                where: { id: ID } 
            });

            if (result === 0) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }

            res.status(200).json({ message: 'Cliente atualizado com sucesso' }); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar cliente' });
        }
    }
};
