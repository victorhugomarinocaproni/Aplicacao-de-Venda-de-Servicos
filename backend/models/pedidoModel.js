const conexao = require("../database/conexao");
class PedidoModel{
    criar(novoPedido){
        console.log(novoPedido);
        const teste = {...novoPedido};
        const sql = `INSERT INTO pedidos (status_pedido, cartao_id, cod_servico) VALUES ('${teste.status_pedido}',${teste.cartao_id},'${teste.cod_servico}')`;
        return new Promise((resolve, reject) =>{
            conexao.query(sql, novoPedido, (error, resposta)=>{
                if(error){
                    console.log("Deu erro ao gerar pedido...");
                    console.log(error);
                    reject(error);
                }
                console.log("Criou um novo pedido com sucesso!");
                resolve(resposta);
            });
        });
    }

}

module.exports = new PedidoModel();