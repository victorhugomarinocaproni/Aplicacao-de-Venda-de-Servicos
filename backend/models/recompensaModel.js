const conexao = require("../database/conexao");
class RecompensaModel{

    criar(novaRecompensa){
        console.log(novaRecompensa);
        const recompensa = {...novaRecompensa};
        console.log('tamo aqui');
        const sql = `INSERT INTO recompensas (data_recebimento, cartao_id, nome, abreviacao, status_recompensa) VALUES ('${recompensa.data_recebimento}',${recompensa.cartao_id}, '${recompensa.nome}', '${recompensa.abreviacao}', 'A')`;
        return new Promise((resolve, reject) =>{
            conexao.query(sql, novaRecompensa, (error, resposta)=>{
                if(error){
                    console.log("Deu erro ao gerar recompensa...");
                    console.log(error);
                    reject(error);
                }
                console.log("Registrou a nova recompensa com sucesso!");
                resolve(resposta);
            });
        });
    }

    listar(id){
        const sql = `SELECT * FROM recompensas WHERE cartao_id = ${id} and status_recompensa = 'A'`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar recompensas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Recompensas listadas!");
                resolve(resposta);
            })
        });
    }

    atualizar(id){
        console.log(id);
        const sql = `UPDATE recompensas SET status_recompensa = 'F' WHERE cod_recompensa = ${id}`;
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, resposta)=>{
                if(error){
                    console.log(error);
                    console.log("Erro ao atualizar as recompensas");
                    
                    reject(error);
                }
                console.log("Recompensa utilizado com sucesso!");
                resolve(resposta);
            })
        });
    }
}

module.exports = new RecompensaModel();