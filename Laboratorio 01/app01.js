const { Console } = require("console");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/cadastro", (req, res) => {
    var vet = req.body;
    console.log(vet);

    for (let i = 0; i < vet.length; i++) {
        var result = vet[i].nota >= 5 ? "Você passou" : "Reprovou animal"
        console.log(`nome:${vet[i].nome} nota:${vet[i].nota} situação:${result}`)
    }
    res.send("foi")
});

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001!")
})