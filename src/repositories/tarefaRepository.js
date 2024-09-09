const Tarefa = require('../models/tarefa')
const { Op } = require('sequelize');

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

    async updateTarefa(id, tarefaData) {
        try {
            const tarefa = await Tarefa.findByPk(id)
            if (!tarefa) {
                throw new Error({ error: 'Tarefa não encontrada' })
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

    async deleteTarefa(id) {
        try {
            const tarefa = await Tarefa.findByPk(id)
            if (!tarefa) {
                throw new Error({ error: 'Tarefa não encontrada' })
            }

            await Tarefa.destroy({ where: { id } })
            return { message: 'Tarefa deletada com sucesso' }

        } catch (error) {
            throw new Error('Erro ao deletar tarefa: ' + error.message)
        }
    }

    async deleteManyTarefas(ids) {
        try {
            await Tarefa.destroy({ where: { id: { [Op.in]: ids } } })
            return { message: 'Tarefas deletadas com sucesso' }

        } catch (error) {
            throw new Error('Erro ao deletar tarefas: ' + error.message)
        }
    }

    async getByIdsTarefas(ids) {
        try {
            const tarefas = await Tarefa.findAll({ where: { id: { [Op.in]: ids } } })
            return tarefas;
        
        } catch (error) {
            throw new Error('Erro ao buscar tarefas: ' + error.message)
        }
    }
}

module.exports = new TarefaRepository()