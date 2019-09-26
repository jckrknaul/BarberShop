const path = require('path');
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

function gerarToken(params = {}){
    return jwt.sign(params, authConfig.secret, {expiresIn: 86400});
};

module.exports = {
    async returnAll(req, res){
        const usuario = await Usuario.findAll();
        return res.json(usuario);
    },
    
    async returnByID(req, res){
        const usuario = await Usuario.findAll({where: { id: req.params.id }});
        return res.json(usuario);
    },
    
    async insert(req, res){
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
    },

    async update(req, res){

        try {

            const usuario = await Usuario.update(req.body, {where: { id: req.params.id }});
            return res.json(usuario);

        } catch (error) {
            return res.status(400).send({error: 'Falha ao alterar o usuário!'}) 
        }
        
    },

    async delete(req, res){
        try {

            await Usuario.destroy({where: { id: req.params.id }});
            return res.send();    

        } catch (error) {
            return res.status(400).send({error: 'Falha ao deletar o usuário!'})
        }        
    },

    async register(req, res){
        
        const { email } = req.body;

        try {
            const usuaVal = await Usuario.findAll({where: { email: email }});
            console.log("usurioval = ", usuaVal.length);
            if (usuaVal.length > 0)
                return res.status(400).send({error: 'Usuário ja cadastrado!'});

            const usuario = await Usuario.create(req.body);
            
            console.log("USUARIO: ", usuario);
            
            usuario.senha = undefined;

            return res.send({usuario, token: gerarToken({id: usuario.id})});
        } catch (error) {
            console.log("ERRO: ", error);
            return res.status(400).send({error: 'Falha ao cadastrar o usuário!'})
        }
    },

    async authenticate(req, res){
        
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({where: { email: email }});

        if (!usuario)
            return res.status(400).send({error: 'Usuário não encontrado!'});

        if (!await bcryptjs.compare(senha, usuario.dataValues.senha))
          return res.status(400).send({error: 'Senha inválida!'});
    
          usuario.senha = undefined;

        res.send({usuario, 
                  token: gerarToken({id: usuario.dataValues.id})
        });
    },

    async forgotPass(req, res) {
        
        const { email } = req.body;
        try {

            const usuario = await Usuario.findOne({where: { email: email }});
            if (!usuario)
                return res.status(400).send({error: 'Usuário não encontrado!'});

            const token = crypto.randomBytes(20).toString('hex');

            //tempo de expiração do token de 1 hora
            const now = new Date();
            now.setHours(now.getHours() + 1);

            //atualiza a senha reset token e a data de expiração deste token
            await Usuario.update({senhaResetToken: token, senhaResetExpires: now}, {where: {id: usuario.dataValues.id}});

            //envia o email com o template html da pasta resources
            mailer.sendMail({
                to: email,
                from: 'jckr.knaul@gmail.com',
                template: 'auth/forgotPass',
                context: { token },
            }, (err) => {
                console.log(err);
                if (err)
                    return res.status(400).send({error: 'Erro ao enviar o email de esquici a senha!'});
                
                return res.send();
            });
            
        } catch (error) {
            return res.status(400).send({error: 'Erro ao acessar esqueci a senha!'});   
        }
    },

    async resetPass(req, res){

        const { email, token, senha } = req.body;
        try {
            const usuario = await Usuario.findOne({where: { email: email }});
            if (!usuario)
                return res.status(400).send({error: 'Usuário não encontrado!'});

            if (token !== usuario.dataValues.senhaResetToken)
                return res.status(400).send({error: 'Token invalido!'});

            const now = new Date();
            if (now > usuario.dataValues.senhaResetExpires)
                return res.status(400).send({error: 'Token expirado! Favor gere um novo token.'});

            //gerar nova senha Hash            
            const senhaHash = bcryptjs.hashSync(usuario.dataValues.senha, 10);
            //atualizar no banco a nova senha
            await Usuario.update({senha: senhaHash}, {where: { id: usuario.dataValues.id }});
            //retorna ao usuário com sucesso
            res.send();

        } catch (error) {
            return res.status(400).send({error: 'Erro ao resetar a senha!'});
        }
    }

}