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

    async updateEditTarefa(req, res) {
        const { id } = req.params
        const { titulo, descricao } = req.body

        try {
            const tarefa = await TarefaRepository.updateEditTarefa(id, { titulo, descricao })
            res.status(200).json(tarefa)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateConcluirTarefa(req, res) {
        const { id } = req.params;
        const { concluida } = req.body;

        if (!id || concluida === undefined) {
            return res.status(400).json({ error: 'ID e status de conclusão são obrigatórios' });
        }

        try {
            const updatedTarefa = await TarefaRepository.updateConcluirTarefa(id, { concluida });

            if (!updatedTarefa) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            return res.status(200).json(updatedTarefa);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }


}

module.exports = new TarefaController()