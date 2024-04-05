var bd = require("../configs/bd")
const sql = require("mssql")

exports.cadastroProduto = (req, res) => {
    var { modelo, marca, valor } = req.body

    sql.connect(bd, async err => {

        try {
            const requisicao = new sql.Request()
            
            const strSQL = `INSERT INTO tbl_Produtos (Modelo, Marca, Valor)
            VALUES('${modelo}','${marca}','${valor}')`

            var addID = requisicao.query(strSQL)

            res.send("Cadastro finalizado com sucesso!")
        }
        catch (err) {

            console.error("que burro " + err)
            res.send("Deu ruim")
        }
    })
}