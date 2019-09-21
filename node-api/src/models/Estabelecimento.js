const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('./Empresa');

const Estabelecimento = db.define('Estabelecimento', {
    nome: {
        type: Sequelize.STRING,
        all: true,
    },
    logradouro: {
        type: Sequelize.STRING,
    },
    nro: {
        type: Sequelize.INTEGER,
    },
    bairro:{
        type: Sequelize.STRING,
    },
    cep:{
        type: Sequelize.STRING,
    },
    cidade:{
        type: Sequelize.STRING,
    },
    uf:{
        type: Sequelize.STRING,
    },
});

Estabelecimento.belongsTo(Empresa, {foreingKey: 'fk_Empresa'}); 
module.exports = Estabelecimento;