const Tarefa = require('../models/tarefa');
const { Op } = require('sequelize');

class TarefaRepository {

    async getAllTarefas() {
        try {
            return await Tarefa.findAll();
        } catch (error) {
            throw new Error(`Erro ao buscar todas as tarefas: ${error.message}`);
        }
    }

    async createTarefa(tarefaData) {
        try {
            return await Tarefa.create(tarefaData);
        } catch (error) {
            throw new Error(`Erro ao criar nova tarefa: ${error.message}`);
        }
    }

    async getByIdTarefa(id) {
        try {
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                return null;
            }
            return tarefa;
        } catch (error) {
            throw new Error(`Erro ao buscar tarefa por id: ${error.message}`);
        }
    }

    async updateTarefa(id, tarefaData) {
        try {
            const tarefa = await this.getByIdTarefa(id);
            if (!tarefa) {
                return null;
            }

            await Tarefa.update(tarefaData, {
                where: { id },
                fields: ['titulo', 'descricao']
            });

            return await this.getByIdTarefa(id);
        } catch (error) {
            throw new Error(`Erro ao atualizar tarefa: ${error.message}`);
        }
    }

    async deleteTarefa(id) {
        try {
            const tarefa = await this.getByIdTarefa(id);
            if (!tarefa) {
                throw new Error('Tarefa não encontrada');
            }

            await Tarefa.destroy({ where: { id } });
            return { message: 'Tarefa deletada com sucesso' };
        } catch (error) {
            throw new Error(`Erro ao deletar tarefa: ${error.message}`);
        }
    }

    async deleteManyTarefas(ids) {
        try {
            await Tarefa.destroy({ where: { id: { [Op.in]: ids } } });
            return { message: 'Tarefas deletadas com sucesso' };
        } catch (error) {
            throw new Error(`Erro ao deletar tarefas: ${error.message}`);
        }
    }

    async getByIdsTarefas(ids) {
        try {
            return await Tarefa.findAll({ where: { id: { [Op.in]: ids } } });
        } catch (error) {
            throw new Error(`Erro ao buscar tarefas: ${error.message}`);
        }
    }

    async updateEditTarefa(id, tarefaData) {
        try {
            return await this.updateTarefa(id, tarefaData);
        } catch (error) {
            throw new Error(`Erro ao editar tarefa: ${error.message}`);
        }
    }

    async updateConcluirTarefa(id, tarefaData) {
        try {
            const tarefa = await this.getByIdTarefa(id);
            if (!tarefa) {
                return null;
            }

            await Tarefa.update(tarefaData, {
                where: { id },
                fields: ['concluida']
            });

            return await this.getByIdTarefa(id);
        } catch (error) {
            throw new Error(`Erro ao concluir tarefa: ${error.message}`);
        }
    }

}

module.exports = new TarefaRepository();
