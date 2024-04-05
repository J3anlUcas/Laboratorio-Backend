var bd = require("../configs/bd")
const sql = require("mssql")

exports.listarClientes = (req, res) => {

    try {
        var { nome } = req.query

        const strAllClientes = `SELECT * FROM tbl_Clientes WHERE Nome = '${nome}'`

        sql.connect(bd, async err => {
            const requisicao = new sql.Request()

            var resultadoPesquisa = await requisicao.query(strAllClientes)
            
            res.send(resultadoPesquisa)

        })
    }
    catch (err) {

    }
}
