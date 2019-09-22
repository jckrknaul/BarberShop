const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('../models/Empresa');

const Servico = db.define('Servico', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.DOUBLE
    }    
});

Servico.belongsTo(Empresa, {foreingKey: 'fk_Empresa'});
module.exports = Servico;


