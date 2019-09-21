const Sequelize = require('sequelize');

 const sequelize = new Sequelize('BarberShop', 'root', 'masterkey',{
    host: 'localhost',
    dialect: 'mysql', 
})

sequelize.sync();

module.exports = sequelize;