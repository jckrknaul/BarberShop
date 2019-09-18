const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

module.exports = {
    async returnAll(req, res){
        const empresas = await Empresa.find();
        return res.json(empresas);
    },
    
    async returnByID(req, res){
        const empresa = await Empresa.findById(req.params.id);
        return res.json(empresa);
    },
    
    async insert(req, res){
        const empresa = await Empresa.create(req.body);
        return res.json(empresa);
    },

    async update(req, res){
        const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(empresa);
    },

    async delete(req, res){
        await Empresa.findByIdAndRemove(req.params.id);
        return res.send();
    }

}