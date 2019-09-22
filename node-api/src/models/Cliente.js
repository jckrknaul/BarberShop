const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('../models/Empresa');

const Cliente = db.define('Cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }    
});

Cliente.belongsTo(Empresa, {foreingKey: 'fk_Empresa'});
module.exports = Cliente;


