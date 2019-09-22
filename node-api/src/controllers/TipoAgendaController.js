const TipoAgenda = require('../models/TipoAgenda');

module.exports = {
    async returnAll(req, res){
        const tipoAg = await TipoAgenda.findAll();
        return res.json(tipoAg);
    },
    
    async returnByID(req, res){
        const tipoAg = await TipoAgenda.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(tipoAg);
    },
    
    async insert(req, res){
        const tipoAg = await TipoAgenda.create(req.body);
        return res.json(tipoAg);
    },

    async update(req, res){
        const tipoAg = await TipoAgenda.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(tipoAg);
    },

    async delete(req, res){
        await TipoAgenda.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}