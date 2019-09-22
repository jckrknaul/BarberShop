const AgendaCliente = require('../models/AgendaCliente');

module.exports = {
    async returnAll(req, res){
        const AgCliente = await AgendaCliente.findAll();
        return res.json(AgCliente);
    },
    
    async returnByID(req, res){
        const AgCliente = await AgendaCliente.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(AgCliente);
    },
    
    async insert(req, res){
        try {
            const AgCliente = await AgendaCliente.create(req.body);
            return res.json(AgCliente);    
        } catch (error) {
            return res.status(400).json({ message: `Erro ao inserir a agenda do cliente - ${error.message}` })
        }
    },

    async update(req, res){
        try {
            const AgCliente = await AgendaCliente.update(req.body, {where: {id: req.params.id} });
            return res.json(AgCliente);    
        } catch (error) {
            return res.status(400).json({ message: `Erro ao alterar o agenda do cliente - ${error.message}` })
        }
        
    },

    async delete(req, res){
        try {
            await AgendaCliente.destroy({where: {id: req.params.id}});
            return res.send();    
        } catch (error) {
            return res.status(400).json({ message: `Erro ao deletar o agenda do cliente - ${error.message}` })
        }
        
    }

}