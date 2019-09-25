const Sequelize = require('sequelize');
const db = require('../config/database');
const Empresa = require('./Empresa');
const bcryptjs = require('bcryptjs');

const Usuario = db.define('Usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING
    },
    senhaResetToken: {
        type: Sequelize.DATE
    },
    senhaResetExpires: {
        type: Sequelize.DATE
    }
});

//o evento "beforeCreate" será chamado antes de ir ao banco...
Usuario.beforeCreate((user , options) => {
    {
        console.log("hook called");
        user.senha = user.senha && user.senha != "" ? bcryptjs.hashSync(user.senha, 10) : "";
    }
});

Usuario.belongsTo(Empresa, {foreingKey: 'fk_Empresa'}); 
//Usuario.sync({ force: true })
module.exports = Usuario;


