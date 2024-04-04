var con = require("../configs/bd");
const sql = require("mssql");

exports.cadastroClientes = (req, res) => {
    var {nome, cpf, data_nascimento, genero, uf} = req.body;
    
    const strSQL = `INSERT INTO tbl_Clientes (Nome, Sexo, CPF, Data_Nascimento)
    VALUES('${nome}','${genero}','${cpf}','${data_nascimento}')`;
    
    sql.connect(con, err => {

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
    
}