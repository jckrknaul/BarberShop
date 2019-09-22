const Sequelize = require('sequelize');
const db = require('../config/database');
const TipoAgenda = require('../models/TipoAgenda');
const Estabelecimento = require('../models/Estabelecimento');

const Proficional = db.define('Proficional', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING
    },
    inativo: {
        type: Sequelize.STRING
    }    
});

Proficional.belongsTo(TipoAgenda, {foreingKey: 'fk_TipoAg'});
Proficional.belongsTo(Estabelecimento, {foreingKey: 'fk_Estab'});
module.exports = Proficional;


