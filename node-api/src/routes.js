const express = require('express');
const routes = express.Router();
const EmpresaController = require('./controllers/EmpresaController');

routes.get('/empresa', EmpresaController.returnAll);
routes.get('/empresa/:id', EmpresaController.returnByID);
routes.put('/empresa/:id', EmpresaController.update);
routes.post('/empresa', EmpresaController.insert);
routes.delete('/empresa/:id', EmpresaController.delete);

module.exports = routes;
