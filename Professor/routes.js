const express = require ('express')
const route = express.Router();

//const homeController = require('./controllers/homeController')
const clientes = require('./controllers/Clientes')

//route.get ('/', homeController.paginaInicial)
// route.get ('/clientes', clientes.lerCliente)
// route.post ('/clientes', clientes.gravarCliente)

module.exports = route
