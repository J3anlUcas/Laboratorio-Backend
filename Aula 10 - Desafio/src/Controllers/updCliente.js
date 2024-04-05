var bd = require("../configs/bd")
const sql = require("mssql")

exports.atualizarCliente = (req, res) => {
    var { cpf, nome } = req.body

    try {
        sql.connect(bd, async err => {
            const requisicao = new sql.Request()

            var strUPD = `UPDATE tbl_Clientes SET Nome ='${nome}' WHERE CPF = '${cpf}'`
            const result = await requisicao.query(strUPD)
            res.send("alterado")
        })
    }
    catch (err) {
        console.error(err);
    }
}