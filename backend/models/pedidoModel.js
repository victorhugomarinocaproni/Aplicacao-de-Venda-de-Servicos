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

    listar(id){
        const sql = `SELECT * FROM pedidos WHERE cartao_id = ${id} AND status_pedido = 'A'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar os pedidos");
                    reject(error);
                }
                console.log("Pedidos listados com sucesso!");
                resolve(resposta);
            })
        });
    }

    atualizar(id){
        console.log(id);
        const sql = `UPDATE pedidos SET status_pedido = 'F' WHERE cod_pedido = ${id}`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log(error);
                    console.log("Erro ao atualizar os pedidos");
                    
                    reject(error);
                }
                console.log("Pedido utilizado com sucesso!");
                resolve(resposta);
            })
        });
    }

}

module.exports = new PedidoModel();