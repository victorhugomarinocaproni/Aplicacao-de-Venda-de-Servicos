const recompensaModel = require("../models/recompensaModel");
class RecompensaController{
    
    criar(novaRecompensa){
        return recompensaModel.criar(novaRecompensa);
    }

    listar(id){
        return recompensaModel.listar(id);
    }

    atualizar(id){
        return recompensaModel.atualizar(id);
    }

    listarRecompensasRecebidas(id){
        return recompensaModel.listarRecompensasRecebidas(id);
    }

    listarRecompensasUtilizadas(id){
        return recompensaModel.listarRecompensasUtilizadas(id);
    }

    listarRecompensasNaoUtilizadas(id){
        return recompensaModel.listarRecompensasNaoUtilizadas(id);
    }

    listarRecompensasGeradas(){
        return recompensaModel.listarRecompensasGeradas();
    }

    listarTodasRecompensasNaoUtilizadas(){
        return recompensaModel.listarTodasRecompensasNaoUtilizadas();
    }

    registraUtilizacaoRecompensa(recompensaUtilizada){
        return recompensaModel.registraUtilizacaoRecompensa(recompensaUtilizada);
    }
}

module.exports = new RecompensaController();