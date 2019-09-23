require("dotenv").config();

const express = require('express');
const requireDir = require('require-dir');
const db = require('./src/config/database');
const cors = require('cors');

db.authenticate().then(() => {
  console.log('Conectado com sucesso ao MySQL.');
})
  .catch(err => {
    console.log('Erro ao conectar ao MySQL:' + err);
  });

//iniciando o app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rotas
requireDir('./src/models');
app.use('/', require('./src/routes'));

//coloca o app para ouviar a porta 3001
app.listen(process.env.port || 3001);
