const Estabelecimento = require('../models/Estabelecimento');

module.exports = {
    async returnAll(req, res) {
        const estab = await Estabelecimento.findAll();
        return res.json(estab);
    },

    async returnByID(req, res) {
        const estab = await Estabelecimento.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(estab);
    },

    async insert(req, res) {
        try {
            const estab = await Estabelecimento.create(req.body);
            return res.json(estab);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao inserir o estabelecimento - ${error.message}` })
        }
    },

    async update(req, res) {
        try {
            const estab = await Estabelecimento.update(req.body, { where: { id: req.params.id } });
            return res.json(estab);
        } catch (error) {
            return res.status(400).json({ message: `Erro ao alterar o estabelecimento - ${error.message}` })
        }

    },

    async delete(req, res) {
        try {
            await Estabelecimento.destroy({ where: { id: req.params.id } });
            return res.send();
        } catch (error) {
            return res.status(400).json({ message: `Erro ao deletar o estabelecimento - ${error.message}` })
        }

    }
}