const express = require('express');
const routes = express.Router();
const authMiddleware = require('./middlewares/auth');

const EmpresaController = require('./controllers/EmpresaController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const UsuarioController = require('./controllers/UsuarioController');
const TipoAgendaController = require('./controllers/TipoAgendaController');
const ProficionalController = require('./controllers/ProficionalController');
const ClienteController = require('./controllers/ClienteController');
const ServicoController = require('./controllers/ServicoController');
const AgendaClienteController = require('./controllers/AgendaClienteController');

//middleware para fazer a autenticação
routes.use(authMiddleware);
routes.get('/', (req, res) => {
    res.send({ok: true, user: req.userId});
});

routes.get('/usuario', UsuarioController.returnAll);
routes.get('/usuario/:id', UsuarioController.returnByID);
routes.put('/usuario/:id', UsuarioController.update);
routes.post('/usuario', UsuarioController.insert);
routes.post('/usuario/registrar', UsuarioController.register);
routes.post('/usuario/autenticar', UsuarioController.authenticate);
routes.delete('/usuario/:id', UsuarioController.delete);

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

routes.get('/tipoagenda', TipoAgendaController.returnAll);
routes.get('/tipoagenda/:id', TipoAgendaController.returnByID);
routes.put('/tipoagenda/:id', TipoAgendaController.update);
routes.post('/tipoagenda', TipoAgendaController.insert);
routes.delete('/tipoagenda/:id', TipoAgendaController.delete);

routes.get('/proficional', ProficionalController.returnAll);
routes.get('/proficional/:id', ProficionalController.returnByID);
routes.put('/proficional/:id', ProficionalController.update);
routes.post('/proficional', ProficionalController.insert);
routes.delete('/proficional/:id', ProficionalController.delete);

routes.get('/cliente', ClienteController.returnAll);
routes.get('/cliente/:id', ClienteController.returnByID);
routes.put('/cliente/:id', ClienteController.update);
routes.post('/cliente', ClienteController.insert);
routes.delete('/cliente/:id', ClienteController.delete);

routes.get('/agendacliente', AgendaClienteController.returnAll);
routes.get('/agendacliente/:id', AgendaClienteController.returnByID);
routes.put('/agendacliente/:id', AgendaClienteController.update);
routes.post('/agendacliente', AgendaClienteController.insert);
routes.delete('/agendacliente/:id', AgendaClienteController.delete);

routes.get('/servico', ServicoController.returnAll);
routes.get('/servico/:id', ServicoController.returnByID);
routes.put('/servico/:id', ServicoController.update);
routes.post('/servico', ServicoController.insert);
routes.delete('/servico/:id', ServicoController.delete);

module.exports = routes;
