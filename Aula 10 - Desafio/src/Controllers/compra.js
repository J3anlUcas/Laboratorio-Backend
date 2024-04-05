var bd = require("../configs/bd")
const sql = require("mssql")

exports.compra = (req, res) => {
    var { nome, produto, quantidade } = req.body

    sql.connect(bd, async err => {

        try {
            const requisicao = new sql.Request()

            const strSQNome= `SELECT * FROM tbl_Clientes WHERE Nome = '${nome}'`
            const resulNome = await requisicao.query(strSQNome)
            var { ID_CLIENTE} = resulNome.recordset[0]

            const strSQLProd = `SELECT * FROM tbl_Produtos WHERE Modelo = '${produto}'`
            const resulProd = await requisicao.query(strSQLProd)
            var { ID_PRODUTO} = resulProd.recordset[0]

            const strSQL = `INSERT INTO tbl_Compras (Quantidade, ID_Produto, ID_Cliente)
            VALUES('${quantidade}','${ID_PRODUTO}','${ID_CLIENTE}')`

            var addID = requisicao.query(strSQL)

            res.send("Cadastro finalizado com sucesso!")
        }
        catch (err) {

            console.error("que burro " + err)
            res.send("Deu ruim")
        }
    })


}