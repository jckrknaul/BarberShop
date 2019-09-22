const Servico = require('../models/Servico');

module.exports = {
    async returnAll(req, res) {
        const servico = await Servico.findAll();
        return res.json(servico);
    },

    async returnByID(req, res) {
        const servico = await Servico.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(servico);
    },

    async insert(req, res) {
        try {
            const servico = await Servico.create(req.body);
            return res.json(servico);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao inserir o serviço - ${error.message}` })
        }
    },

    async update(req, res) {
        try {
            const servico = await Servico.update(req.body, { where: { id: req.params.id } });
            return res.json(servico);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao alterar o serviço - ${error.message}` })
        }
    },

    async delete(req, res) {
        try {
            await Servico.destroy({ where: { id: req.params.id } });
            return res.send();
        } catch (error) {
            return res.status(400).json({ message: `Erro ao deletar o serviço - ${error.message}` })
        }
    }

}