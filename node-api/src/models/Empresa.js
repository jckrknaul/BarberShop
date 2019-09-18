const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
    },
    proprietario: {
        type: String,
    },
    logo:{
        type: String,
    },
});

mongoose.model('Empresa', EmpresaSchema);