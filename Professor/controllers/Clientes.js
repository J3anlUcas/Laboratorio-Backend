var dbConfig = require('../configs/dbconfig')
const sql = require('mssql')

exports.lerCliente = (req, res) => {
    //console.log(req.query)
    
    const strSQL = 'SELECT * FROM tbl_Clientes WHERE cpf = ' + req.query.cpf

    sql.connect(dbConfig, err => {
        if (err) {
            console.error("Banco de dados não conectado", err)
        }
        else {
            const requisicao = new sql.Request()
            requisicao.query(strSQL, (err, result) => {
                if (err) {
                    console.error("erro na consulta.", err)
                } else {
                    res.send(result.recordset)
                }
            }
            )
        }
    })
}







exports.gravarCliente = (req, res) => {

    const { nome, sexo, cpf, data_nascimento, uf } = req.body

    sql.connect(dbConfig, async err => {

        if (err) {
            console.error("Banco de dados não conectado", err)
        }
        else {
            const requisicao = new sql.Request()

            //Recupera a ID da tabela de UFs para poder inserir na tabela de clientes.
            //AWAIT é utilizado para o sistema esperar uma resposta, no caso do banco de dados.
            //Para usar o AWAIT é necessário declarar a função como Async.
            const resultUF = await requisicao.query(`SELECT ID_UF FROM tbl_Uf WHERE Sigla = '${uf}'`);
            id_UF = Number(resultUF.recordset[0].ID_UF)

            const strSQL = `INSERT INTO tbl_Clientes (Nome, Sexo, CPF, Data_Nascimento, ID_UF) 
            VALUES ( '${nome}', '${sexo}', '${cpf}', '${data_nascimento}', '${id_UF}')`
            requisicao.query(strSQL, (err, result) => {
                if (err) {
                    console.error("Erro na inserção do dado.", err)
                } else {
                    res.send("Dado Inserido")
                }
            }
            )
        }
    })
}
