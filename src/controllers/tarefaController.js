const TarefaRepository = require('../repositories/tarefaRepository')

class TarefaController {
    async getAllTarefas(req, res) {
        try {
            const tarefas = await TarefaRepository.getAllTarefas()
            res.json(tarefas)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async createTarefa(req, res) {
        const { titulo, descricao, concluida } = req.body
        try {
            const novaTarefa = await TarefaRepository.createTarefa
                ({ titulo, descricao, concluida })
            res.status(201).json(novaTarefa)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getByIdTarefa(req, res) {
        const { id } = req.params
        try {
            const tarefa = await TarefaRepository.getByIdTarefa(id)
            if (!tarefa) {
                res.status(404).json({ error: 'Tarefa não encontrada' })
            }
            res.json(tarefa)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateTarefa(req, res) {
        const { id } = req.params
        const { titulo, descricao } = req.body

        try {
            const tarefa = await TarefaRepository.updateTarefa(id, { titulo, descricao })
            res.status(200).json(tarefa)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteTarefa(req, res) {
        const { id } = req.params

        try {
            await TarefaRepository.deleteTarefa(id)
            res.status(204).json()
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteManyTarefas(req, res) {
        const { ids } = req.body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ error: 'Lista de IDs inválida' });
        }
        try {
            await TarefaRepository.deleteManyTarefas(ids);
            res.status(204).json();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getByIdsTarefas(req, res) {
        const { ids } = req.body;
        
        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ error: 'Lista de IDs inválida' });
        }
        try {
            const tarefas = await TarefaRepository.getByIdsTarefas(ids);
            if (tarefas.length === 0) {
                return res.status(404).json({ error: 'Nenhuma tarefa encontrada' });
            }
            res.status(200).json(tarefas);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TarefaController()