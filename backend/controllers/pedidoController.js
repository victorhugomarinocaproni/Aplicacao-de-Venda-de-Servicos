const pedidoModel = require("../models/pedidoModel");
class PedidoModel{
    
    criar(novoPedido){
        return pedidoModel.criar(novoPedido);
    }

    listar(id){
        return pedidoModel.listar(id);
    }

    atualizar(id){
        return pedidoModel.atualizar(id);
    }
}

module.exports = new PedidoModel();