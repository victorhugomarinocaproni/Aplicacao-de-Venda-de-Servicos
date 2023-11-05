const { Router } = require("express"); // ==> const Router = require('express').Router;  
const router = Router();
const cartaoController = require("../controllers/cartaoController");

router.get("/cartao", (req,res)=>{
    const resposta = cartaoController.listar();
    resposta
        .then(cartoesListados => res.status(200).json(cartoesListados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar cartões!"
        }));
    console.log(resposta);
});

router.post("/gerar-cartao", (req,res)=>{

    const novoCartao = req.body;
    const cartao = cartaoController.criar(novoCartao);
    cartao
        .then(cartaoCriado => res.status(201).json({
            cartao: cartaoCriado,
            mensagem: "Cartão gerado e cadastrado com sucesso!"
        }))
        .catch(error => res.status(400).json(error.message));
    
});

module.exports = router;