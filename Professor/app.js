const express = require ('express')
const app = express()
const PORTA = 3000

const routes = require ('./routes') //carrega o arquivo "routes.js" que contem as rotas da aplicação.

app.use (express.json())

app.use (routes); //indica para o Express utilizar o arquivo de rotas.


app.listen(PORTA, function () {
    console.log("Servidor iniciado na porta 3000!");
});