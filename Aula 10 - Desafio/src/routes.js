const express = require('express')
const route1 = express.Router();
const cadCliente = require("./Controlles/cadCliente.js");
const cadProduto = require('./Controlles/cadProduto.js');

route1.post('/cadastro-de-Cliente',cadCliente.cadastroClientes);
route1.post('/cadastro-de-Produto', cadProduto.cadastroProdutos);

module.exports = route1