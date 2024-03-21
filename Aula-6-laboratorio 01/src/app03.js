const express = require('express')
const app = express();
const con = require('./connection')
const PORTA = 2500;




app.listen(PORTA, () => {
    console.log(`Servidor na porta ${PORTA}!`);
});