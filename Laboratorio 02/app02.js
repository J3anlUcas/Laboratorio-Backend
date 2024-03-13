const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    var vetNum = [2, 1, 5, 3, 4];
    res.json(vetNum)

});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000!")
})