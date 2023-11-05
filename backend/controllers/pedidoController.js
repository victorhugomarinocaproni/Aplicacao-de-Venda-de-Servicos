const pedidoModel = require("../models/pedidoModel");
class PedidoModel{
    
    criar(novoPedido){
        return pedidoModel.criar(novoPedido);
    }
}

module.exports = new PedidoModel();