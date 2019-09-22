const UsuarioWeb = require('../models/UsuarioWeb');

module.exports = {
    async returnAll(req, res){
        const usuario = await UsuarioWeb.findAll();
        return res.json(usuario);
    },
    
    async returnByID(req, res){
        const usuario = await UsuarioWeb.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(usuario);
    },
    
    async insert(req, res){
        const usuario = await UsuarioWeb.create(req.body);
        return res.json(usuario);
    },

    async update(req, res){
        const usuario = await UsuarioWeb.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(usuario);
    },

    async delete(req, res){
        await UsuarioWeb.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}