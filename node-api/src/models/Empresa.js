const Sequelize = require('sequelize');
const db = require('../config/database');

const Empresa = db.define('Empresa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING
    },
    proprietario: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    }    
});

module.exports = Empresa;


