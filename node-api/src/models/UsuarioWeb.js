const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('../models/Empresa');

const UsuarioWeb = db.define('UsuarioWeb', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING
    }    
});

UsuarioWeb.belongsTo(Empresa, {foreingKey: 'fk_Empresa'}); 
module.exports = UsuarioWeb;


