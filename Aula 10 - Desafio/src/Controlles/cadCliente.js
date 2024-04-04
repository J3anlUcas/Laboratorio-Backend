var con = require("../configs/bd");
const sql = require("mssql");

exports.cadastroClientes = (req, res) => {
    var { nome, cpf, data_nascimento, genero, uf } = req.body;

    //uf recebida contem dentro de tbl_uf? se sim adicnionar o id da uf correspontende

    sql.connect(con, async err => {

        const requisicao = new sql.Request()
        console.log(uf);
        
        try {
            var testeUF = `SELECT * FROM tbl_Uf WHERE sigla = '${uf}'`
            var resultadoUF = await requisicao.query(testeUF)

            var { ID_UF } = resultadoUF.recordset[0]
            // res.send(ID_UF.toString());

            const strSQL = `INSERT INTO tbl_Clientes (Nome, Sexo, CPF, Data_Nascimento, ID_UF)
            VALUES('${nome}','${genero}','${cpf}','${data_nascimento}','${ID_UF}')`
            
            console.log(strSQL);
             var addID = requisicao.query(strSQL)
             res.send("oi")
        }
        catch (err) {
            console.error(err)
            res.send("Deu ruim")
        }
        // requisicao.query(strSQL, (err, result) => {

        //     if (err) {
        //         res.send(`Erro no cadastro`)
        //         console.error("Erro no cadastro", err)
        //     }
        //     else {
        //         res.send("Produto cadastrado");
        //     }
        // });
    });

}