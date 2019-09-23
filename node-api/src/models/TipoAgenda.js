const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('../models/Empresa');

const TipoAgenda = db.define('TipoAgenda', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dias: {
        type: Sequelize.STRING
    },
    periodicidade: {
        type: Sequelize.INTEGER
    },
    horaInicio: {
        type: Sequelize.DATE
    },
    horaFim: {
        type: Sequelize.DATE
    }
});

TipoAgenda.belongsTo(Empresa, {foreingKey: 'fk_Empresa'}); 
module.exports = TipoAgenda;


