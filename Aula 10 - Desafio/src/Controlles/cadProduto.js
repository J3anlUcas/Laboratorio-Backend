var con = require("../configs/bd");
const sql = require('mssql')

exports.cadastroProdutos = (req, res) => {
    var { modelo, marca, valor } = req.body;

    const strSQL = `INSERT INTO tbl_Produtos (Modelo, Marca, Valor) 
    VALUES('${modelo}','${marca}','${valor}')`

    sql.connect(con => {

        const requisicao = new sql.Request()
        requisicao.query(strSQL, (err, result) => {

            if (err) {
                res.send(`Erro no cadastro`)
                console.error("Erro no cadastro", err);
            }
            else {
                res.send("Produto cadastrado");
            }
        });
    });
};


