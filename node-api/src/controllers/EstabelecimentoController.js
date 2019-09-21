const Estabelecimento = require('../models/Estabelecimento');

module.exports = {
    async returnAll(req, res){
        const estab = await Estabelecimento.findAll();
        return res.json(estab);
    },
    
    async returnByID(req, res){
        const estab = await Estabelecimento.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(estab);
    },
    
    async insert(req, res){
        const estab = await Estabelecimento.create(req.body);
        return res.json(estab);
    },

    async update(req, res){
        const estab = await Estabelecimento.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(estab);
    },

    async delete(req, res){
        await Estabelecimento.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }
}