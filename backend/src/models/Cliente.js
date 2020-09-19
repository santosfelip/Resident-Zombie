const mongoose = require('../database/index');



const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    email: {
        type: String,
    },
    identificacao: {
        type: String,
    },
    telefone: {
        type: String,
    },
    cep: {
        type: String,
    },
    logradouro: {
        type: String,
    },
    numero: {
        type: String,
    },
    bairro: {
        type: String,
    },
    cidade: {
        type: String,
    },
    estado: {
        type: String,
    }
})


const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;
