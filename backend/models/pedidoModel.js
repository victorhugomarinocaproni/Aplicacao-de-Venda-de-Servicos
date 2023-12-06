const conexao = require("../database/conexao");
class PedidoModel{
    criar(novoPedido){
        // console.log(novoPedido);
        const pedido = {...novoPedido};
        const sql = `INSERT INTO pedidos (status_pedido, cartao_id, cod_servico, data_pedido) VALUES ('${pedido.status_pedido}',${pedido.cartao_id},'${pedido.cod_servico}', '${pedido.data_pedido}')`;
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
    };

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
    };

    listarComprados(id){
        const sql = `SELECT cod_servico, data_pedido FROM pedidos WHERE cartao_id = ${id}`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar os pedidos comprados");
                    reject(error);
                }
                console.log("Pedidos comprados listados com sucesso!");
                resolve(resposta);
            })
        });
    };

    listarUsados(id){
        const sql =`SELECT 
                    P.cod_servico, 
                    U.data_utilizacao_ped
                    FROM pedidos AS P
                    INNER JOIN utilizacao_pedidos AS U
                    ON P.cod_pedido = U.cod_pedido
                    WHERE cartao_id = ${id} and status_pedido = 'F'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar os pedidos usados");
                    reject(error);
                }
                console.log("Pedidos usados listados com sucesso!");
                resolve(resposta);
            })
        });
    };

    listarNaoUsados(id){
        const sql =`SELECT 
                    cod_servico, 
                    data_pedido
                    FROM pedidos
                    WHERE cartao_id = ${id} and status_pedido = 'A'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar os não utilizados");
                    reject(error);
                }
                console.log("Pedidos não usados listados com sucesso!");
                resolve(resposta);
            })
        });
    }

    listarTodosPedidosUsados(){
        const sql =`SELECT 
                    cod_servico
                    FROM pedidos
                    WHERE status_pedido = 'F'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar TODOS os pedidos utilizados");
                    reject(error);
                }
                console.log("TODOS pedidos utilizados listados com sucesso!");
                resolve(resposta);
            })
        });
    }

    listarKitsVendidos(){
        const sql =`SELECT 
                    cod_servico
                    FROM pedidos
                    WHERE cod_servico = 'KFM' or cod_servico = 'KLP' or cod_servico = 'KMT'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar kits vendidos");
                    reject(error);
                }
                console.log("Kits vendidos listados com sucesso!");
                resolve(resposta);
            })
        });
    }

    listarTodosPedidosNaoUsados(){
        const sql =`SELECT 
                    cod_servico
                    FROM pedidos
                    WHERE status_pedido = 'A'`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log("Erro ao listar TODOS os pedidos NÃO utilizados");
                    reject(error);
                }
                console.log("TODOS pedidos NÃO utilizados listados com sucesso!");
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
    };

    registraUtilizacaoPedido(utilizacaoPedido){

        const pedidoUtilizado = {...utilizacaoPedido};
        const sql = `INSERT INTO utilizacao_pedidos (data_utilizacao_ped, cod_pedido) VALUES ('${pedidoUtilizado.dataUtilizacao}','${pedidoUtilizado.codPedido}')`;
        return new Promise((resolve, reject) =>{
            conexao.query(sql, utilizacaoPedido, (error, resposta)=>{
                if(error){
                    console.log("Deu erro ao registrar a utilização do pedido...");
                    console.log(error);
                    reject(error);
                }
                console.log("Registrou a utilização do pedido com sucesso!");
                resolve(resposta);
            });
        });
    };

}

module.exports = new PedidoModel();