const Joi = require('joi');

const tarefaSchema = Joi.object({
    titulo: Joi.string().min(3).max(100).required(),
    descricao: Joi.string().min(5).max(500).required(),
    concluida: Joi.boolean().optional()
});

module.exports = { tarefaSchema };
