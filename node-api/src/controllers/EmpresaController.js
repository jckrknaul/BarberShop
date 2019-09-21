const Empresa = require('../models/Empresa');

module.exports = {
    async returnAll(req, res){
        const empresa = await Empresa.findAll();
        return res.json(empresa);
    },
    
    async returnByID(req, res){
        const empresa = await Empresa.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(empresa);
    },
    
    async insert(req, res){
        const empresa = await Empresa.create(req.body);
        return res.json(empresa);
    },

    async update(req, res){
        const empresa = await Empresa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(empresa);
    },

    async delete(req, res){
        await Empresa.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}