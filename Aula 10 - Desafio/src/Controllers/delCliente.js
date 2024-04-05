var bd = require("../configs/bd")
const sql = require("mssql")

exports.deletCliente = (req, res) => {
    var { nome, cpf } = req.body

    sql.connect(bd, async err => {
        try {
            const requisicao = new sql.Request()
            var strSQL = `DELETE FROM tbl_Clientes WHERE Nome ='${nome}' OR CPF = '${cpf}'`

            var resul = requisicao.query(strSQL)
            res.send("Cliente apagado com sucesso!")
        }
        catch (err) { }
    })
}