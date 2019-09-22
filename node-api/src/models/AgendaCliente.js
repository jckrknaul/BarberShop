const Sequelize = require('sequelize');
const db = require('../config/database');
const Proficional = require('../models/Proficional');
const Cliente = require('../models/Cliente');
const Servico = require('../models/Servico');

const AgendaCliente = db.define('AgendaCliente', {
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    hora: {
        type: Sequelize.DATE
    },
    bonus: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.DOUBLE
    }    
});

AgendaCliente.belongsTo(Servico, {foreingKey: 'fk_Servico'}); 
AgendaCliente.belongsTo(Cliente, {foreingKey: 'fk_Cliente'}); 
AgendaCliente.belongsTo(Proficional, {foreingKey: 'fk_Proficional'}); 
module.exports = AgendaCliente;


