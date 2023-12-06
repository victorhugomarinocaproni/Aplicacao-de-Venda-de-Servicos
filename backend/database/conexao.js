const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "391720",
    database: "aplicacao"
});

module.exports = conexao;