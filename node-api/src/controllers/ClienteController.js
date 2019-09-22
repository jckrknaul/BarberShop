const Cliente = require('../models/Cliente');

module.exports = {
    async returnAll(req, res) {
        try {
            const cliente = await Cliente.findAll();
            return res.json(cliente);    
        } catch (error) {
            return res.status(400).json({ message: `Erro na requisição de consulta - ${error.message}` })
        }        
    },

    async returnByID(req, res) {
        try {
            const cliente = await Cliente.findAll({where: {id: req.params.id} });
            return res.json(cliente);    
        } catch (error) {
            return res.status(400).json({ message: `Erro na requisição de consulta - ${error.message}` })
        }
    },

    async insert(req, res) {
        try {
            const cliente = await Cliente.create(req.body);
            return res.json(cliente);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao inserir o cliente - ${error.message}` })
        }
    },

    async update(req, res) {
        try {
            const cliente = await Cliente.update(req.body, {where: { id: req.params.id }});
            return res.json(cliente);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao alterar o cliente - ${error.message}` })
        }
    },

    async delete(req, res) {        
        try {
            await Cliente.destroy({where: {id: req.params.id} });
            return res.send();
        } catch (error) {
            return res.status(400).json({ message: `Erro ao deletar o cliente - ${error.message}` })
        }
    }

}