const Proficional = require('../models/Proficional');

module.exports = {
    async returnAll(req, res){
        const profic = await Proficional.findAll();
        return res.json(profic);
    },
    
    async returnByID(req, res){
        const profic = await Proficional.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(profic);
    },
    
    async insert(req, res){
        const profic = await Proficional.create(req.body);
        return res.json(profic);
    },

    async update(req, res){
        const profic = await Proficional.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(profic);
    },

    async delete(req, res){
        await Proficional.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}