const express = require('express');
const clientController = require('../controllers/clientController');
const vendaController = require('../controllers/salesController');

const router = express.Router();

// Rotas de Clientes
router.get('/clientes', clientController.findAll)
router.get('/clientes/:ID', clientController.findOne)
router.post('/clientes', clientController.create); 
router.delete('/clientes/:ID', clientController.delete)
router.put('/clientes/:ID', clientController.update)

// Rotas de Vendas
router.get('/vendas', vendaController.findAll); 
router.get('/vendas/:ID', vendaController.findOne); 
router.post('/vendas', vendaController.create); 
router.delete('/vendas/:ID', vendaController.delete);
router.put('/vendas/:ID', vendaController.update); 


module.exports = router;
