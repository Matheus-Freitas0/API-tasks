const Tarefa = require('../models/tarefa')

class TarefaRepository {

    async getAllTarefas() {
        try {
            return await Tarefa.findAll()
        } catch (error) {
            throw new Error('Erro ao buscar todas as tarefas: ' + error.message)
        }
    }

    async createTarefa(tarefaData) {
        try {
            return await Tarefa.create(tarefaData)
        } catch (error) {
            throw new Error('Erro ao criar nova tarefa: ' + error.message)
        }
    }

    async getByIdTarefa(id) {
        try {
            return await Tarefa.findByPk(id)
        } catch (error) {
            throw new Error('Erro ao buscar tarefa por id: ' + error.message)
        }
    }

    async updateEditTarefa(id, tarefaData) {
        try {
            const tarefa = await Tarefa.findByPk(id)
            if (!tarefa) {
                return null;
            }

            await Tarefa.update(tarefaData, {
                where: { id },
                fields: ['titulo', 'descricao']
            })

            const updatedTarefa = await Tarefa.findByPk(id)
            return updatedTarefa;

        } catch (error) {
            throw new Error('Erro ao atualizar tarefa: ' + error.message)
        }
    }

    async updateConcluirTarefa(id, tarefaData) {
        try {
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                return null;
            }

            await Tarefa.update(tarefaData, {
                where: { id },
                fields: ['concluida']
            });

            const updatedTarefa = await Tarefa.findByPk(id);
            return updatedTarefa;
        } catch (error) {
            throw new Error('Erro ao atualizar tarefa: ' + error.message);
        }
    }

}
module.exports = new TarefaRepository()