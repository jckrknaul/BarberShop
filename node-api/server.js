require("dotenv").config();

const express = require('express');
const requireDir = require('require-dir');
const db = require('./src/config/database');

db.authenticate().then(() => {
    console.log('Conectado com sucesso ao MySQL.');
  })
  .catch(err => {
    console.log('Erro ao conectar ao MySQL:' + err);
  });


//iniciando o app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rotas
requireDir('./src/models');
app.use('/api', require('./src/routes'));

//coloca o app para ouviar a porta 3001
app.listen(3001);
