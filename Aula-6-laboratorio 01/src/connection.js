var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"sql10.freemysqlhosting.net",
    user:"sql10692479",
    password:"ve4BgktZLY",
    database:"sql10692479"
});

module.exports = connection