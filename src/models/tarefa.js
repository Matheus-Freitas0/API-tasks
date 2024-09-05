const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true,
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
})

module.exports = Tarefa