const express = require('express');
const routes = express.Router();
const EmpresaController = require('./controllers/EmpresaController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');

routes.get('/empresa', EmpresaController.returnAll);
routes.get('/empresa/:id', EmpresaController.returnByID);
routes.put('/empresa/:id', EmpresaController.update);
routes.post('/empresa', EmpresaController.insert);
routes.delete('/empresa/:id', EmpresaController.delete);

routes.get('/estabelecimento', EstabelecimentoController.returnAll);
routes.get('/estabelecimento/:id', EstabelecimentoController.returnByID);
routes.put('/estabelecimento/:id', EstabelecimentoController.update);
routes.post('/estabelecimento', EstabelecimentoController.insert);
routes.delete('/estabelecimento/:id', EstabelecimentoController.delete);


module.exports = routes;
