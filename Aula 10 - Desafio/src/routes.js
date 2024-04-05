const express = require('express')
const route1 = express.Router()
const cadCliente = require("./Controllers/cadCliente.js")
const readClientes = require("./Controllers/readcliente.js")
const updCliente = require('./Controllers/updCliente.js')
const delCliente = require("./Controllers/delCliente.js")

route1.post('/cadastro_cliente', cadCliente.cadastroClientes)
route1.get('/clientes',readClientes.listarClientes)
route1.post('/atualizar_clientes', updCliente.atualizarCliente)
route1.delete('/delet_cliente',delCliente.deletCliente )

const cadProduto = require("./Controllers/cadProduto.js")

route1.post('/cadastro_product', cadProduto.cadastroProduto)

const compras = require("./Controllers/compra.js")

route1.post('/compras', compras.compra)

module.exports = route1