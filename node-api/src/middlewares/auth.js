const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {

    //somente não pedir autenticação caso for alguma URL abaixo
    if ((req.url !== "/usuario/registrar") && (req.url !== "/usuario/autenticar")) {
        const autHeader = req.headers.authorization;

        if (!autHeader)
            return res.status(401).send({ error: 'Não encontrado o token de autenticação!' });

        const parts = autHeader.split(' ');

        if (!parts.length === 2)
            return res.status(401).send({ error: 'Token error!' });

        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme))
            return res.status(401).send({ error: 'Token mal formatado!' });

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({ error: 'Token Invalido!' });
            }

            req.userId = decoded.id;
            return next();
        });
    }else {
        return next();
    }

};