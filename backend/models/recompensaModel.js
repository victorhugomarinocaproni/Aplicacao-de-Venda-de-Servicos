const conexao = require("../database/conexao");
class RecompensaModel{

    criar(novaRecompensa){
        const recompensa = {...novaRecompensa};
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

    registraUtilizacaoRecompensa(recompensaUtilizada){
        const recompensa = {...recompensaUtilizada};
        const sql = `INSERT INTO utilizacao_recompensas (data_utilizacao_rec, cod_recompensa) VALUES ('${recompensa.data_utilizacao_rec}', '${recompensa.cod_recompensa}')`;
        return new Promise((resolve, reject) =>{
            conexao.query(sql, recompensaUtilizada, (error, resposta)=>{
                if(error){
                    console.log("Deu erro ao registrar utilização da recompensa...");
                    console.log(error);
                    reject(error);
                }
                console.log("Registrou a utilização da recompensa com sucesso!");
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

    listarRecompensasRecebidas(id){
        const sql = `SELECT abreviacao, data_recebimento FROM recompensas WHERE cartao_id = ${id}`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar recompensas recebidas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Recompensas recebidas listadas!");
                resolve(resposta);
            })
        });
    }

    listarRecompensasUtilizadas(id){
        const sql =`SELECT 
                    R.abreviacao, 
                    U.data_utilizacao_rec 
                    FROM recompensas AS R
                    INNER JOIN utilizacao_recompensas AS U
                    ON R.cod_recompensa = U.cod_recompensa
                    WHERE cartao_id = ${id} and status_recompensa = 'F'`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar recompensas utilizadas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Recompensas utilizadas listadas!");
                resolve(resposta);
            })
        });
    }

    listarRecompensasNaoUtilizadas(id){
        const sql =`SELECT 
                    abreviacao, 
                    data_recebimento
                    FROM recompensas 
                    WHERE cartao_id = ${id} and status_recompensa = 'A'`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar recompensas não utilizadas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Recompensas não utilizadas listadas com sucesso!");
                resolve(resposta);
            })
        });
    }

    listarRecompensasGeradas(){
        const sql =`SELECT 
                    abreviacao
                    FROM recompensas`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar TODAS recompensas geradas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Todas recompensas geradas foram listadas com sucesso!");
                resolve(resposta);
            })
        });
    }

    listarTodasRecompensasNaoUtilizadas(){
        const sql =`SELECT 
                    abreviacao
                    FROM recompensas
                    WHERE status_recompensa = 'A'`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar TODAS recompensas não utilizadas!");
                    console.log(error);
                    reject(error);
                }
                console.log("Todas recompensas não utilizadas foram listadas com sucesso!");
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