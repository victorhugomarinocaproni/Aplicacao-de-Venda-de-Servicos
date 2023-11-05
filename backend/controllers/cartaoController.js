const cartaoModel = require("../models/cartaoModel");
class CartaoController{

    criar(novoCartao){
        return cartaoModel.criar(novoCartao);
    }

    listar(){
        return cartaoModel.listar();
    }
}

module.exports = new CartaoController();