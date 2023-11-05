function inicializaServidor(){
    const express = require("express");
    const app = express();
    const porta = 3000;
    const router = require("./routers/index");
    const conexao = require("./database/conexao");
    const tabelas = require("./database/tabelas");

    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));

    tabelas.init(conexao);
    router(app, express);

    try{
        app.listen(porta);
        return console.log('Servidor ativo na porta 3000');
    } catch(error){
        console.log('Erro na inicialização do servidor');
        console.log(`Erro: ${error}`); 
        return;
    }
    
}

inicializaServidor();