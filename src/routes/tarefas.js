const express = require('express');
const tarefaController = require('../controllers/tarefaController');
const router = express.Router();

router.get('/', (req, res) => tarefaController.getAllTarefas
    (req, res));

router.post('/', (req, res) => tarefaController.createTarefa
    (req, res))

router.get('/:id', (req, res) => tarefaController.getByIdTarefa
    (req, res))
    
module.exports = router