const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeBarberApi', {useNewUrlParser: true});

//rotas
requireDir('./src/models');
app.use('/api', require('./src/routes'));

//coloca o app para ouviar a porta 3001
app.listen(3001);