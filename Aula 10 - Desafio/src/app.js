const express = require("express");
const route = require("./routes");
const sql = require("mssql");
const app = express();
const PORTA = 3600

app.use(express.json());

app.use(route);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}!`);
})