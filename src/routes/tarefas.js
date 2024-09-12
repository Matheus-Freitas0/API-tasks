const express = require('express');
const tarefaController = require('../controllers/tarefaController');
const router = express.Router();

router.get('/', (req, res) => tarefaController.getAllTarefas(req, res));

router.get('/:id', (req, res) => tarefaController.getByIdTarefa(req, res))

router.put('/:id', authenticateToken, validateRequest(tarefaSchema), (req, res) => tarefaController.updateEditTarefa(req, res));

router.put('/concluida/:id', authenticateToken, (req, res) => tarefaController.updateConcluirTarefa(req, res));

router.post('/byIds', (req, res) => tarefaController.getByIdsTarefas(req, res));

router.post('/', (req, res) => tarefaController.createTarefa(req, res))

router.put('/:id', (req, res) => tarefaController.updateTarefa(req, res))

router.delete('/:id', authenticateToken, (req, res) => tarefaController.deleteTarefa(req, res));

router.delete('/', authenticateToken, (req, res) => tarefaController.deleteManyTarefas(req, res));

module.exports = router