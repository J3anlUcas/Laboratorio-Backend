var bd = require("../configs/bd")
const sql = require("mssql")

exports.cadastroClientes = (req, res) => {

    //se(uf recebida contem dentro de tbl_uf)? adcionar o id da uf recebida correspontende

    var { nome, cpf, data_nascimento, genero, uf } = req.body

    sql.connect(bd, async err => {

        try {
            const requisicao = new sql.Request()

            const strSQLUF = `SELECT * FROM tbl_Uf WHERE Sigla = '${uf}'`

            const resultadoUF = await requisicao.query(strSQLUF)

            var { ID_UF } = resultadoUF.recordset[0]

            const strSQL = `INSERT INTO tbl_Clientes (Nome, Sexo, CPF, Data_Nascimento, ID_UF)
            VALUES('${nome}','${genero}','${cpf}','${data_nascimento}','${ID_UF}')`

            var addID = requisicao.query(strSQL)

            res.send("Cadastro finalizado com sucesso!")
        }
        catch (err) {

            console.error("que burro " + err)
            res.send("Deu ruim")
        }
    })

}