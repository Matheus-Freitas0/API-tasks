const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const tarefasRouter = require('./routes/tarefas');
const authenticateToken = require('./middlewares/authMiddleware');
const validateTarefa = require('./middlewares/validationMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.use('/tarefas', authenticateToken, validateTarefa, tarefasRouter);

app.use(errorHandler);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Erro ao sincronizar banco de dados:', err));
