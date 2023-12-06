const pedidoModel = require("../models/pedidoModel");
class PedidoModel{
    
    criar(novoPedido){
        return pedidoModel.criar(novoPedido);
    }

    listar(id){
        return pedidoModel.listar(id);
    }

    listarComprados(id){
        return pedidoModel.listarComprados(id);
    }

    atualizar(id){
        return pedidoModel.atualizar(id);
    }

    listarUsados(id){
        return pedidoModel.listarUsados(id);
    }

    listarNaoUsados(id){
        return pedidoModel.listarNaoUsados(id);
    }

    listarTodosPedidosUsados(){
        return pedidoModel.listarTodosPedidosUsados();
    }

    listarKitsVendidos(){
        return pedidoModel.listarKitsVendidos();
    }

    listarTodosPedidosNaoUsados(){
        return pedidoModel.listarTodosPedidosNaoUsados();
    }

    registraUtilizacaoPedido(utilizacaoPedido){
        return pedidoModel.registraUtilizacaoPedido(utilizacaoPedido);
    }
}

module.exports = new PedidoModel();