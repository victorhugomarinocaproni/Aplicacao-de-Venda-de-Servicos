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
}

module.exports = new RecompensaController();