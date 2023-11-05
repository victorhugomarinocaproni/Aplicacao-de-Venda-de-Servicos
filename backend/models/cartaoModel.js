const conexao = require("../database/conexao");
class CartaoModel{
    criar(novoCartao){
        const sql = `INSERT INTO cartoes (cartao_id) VALUES (${novoCartao.cartao_id})`;
        console.log(sql);
        return new Promise((resolve, reject)=>{
            conexao.query(sql,(error, resposta)=>{
                if(error){
                    console.log("Deu erro ao criar novo cartão...");
                    if(error.code == 'ER_DUP_ENTRY'){
                        console.log('Cartão duplicado, tente gerar novamente');
                    }
                    reject(error);
                    return;
                }
                console.log("Criou novo cartão com sucesso!!!");
                resolve(resposta);
            });
        });    
    }

    listar(){
        const sql = `SELECT * FROM cartoes`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar os cartões");
                    reject(error);
                }
                console.log("Cartões listados com sucesso!");
                resolve(resposta);
            })
        });
    }
}

module.exports = new CartaoModel();