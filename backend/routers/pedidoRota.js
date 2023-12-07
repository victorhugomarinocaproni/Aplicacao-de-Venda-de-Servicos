const { Router } = require("express");

const router = Router();
const pedidoController = require("../controllers/pedidoController");
const recompensaController = require("../controllers/recompensaController");

router.get("/pedido/:id", (req,res)=>{
    const { id } = req.params;
    const resposta = pedidoController.listar(id);
    resposta
        .then(pedidosListados => res.status(200).json(pedidosListados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar pedidos!"
        }));
    console.log(resposta);
});

router.get("/pedidos-comprados/:id", (req,res)=>{
    const { id } = req.params;
    const resposta = pedidoController.listarComprados(id);
    resposta
        .then(pedidosCompradosListados => res.status(200).json(pedidosCompradosListados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar os pedidos comprados!"
        }));
    console.log(resposta);
});

router.get("/pedidos-usados/:id", (req,res)=>{
    const { id } = req.params;
    const resposta = pedidoController.listarUsados(id);
    resposta
        .then(pedidosUsadosListados => res.status(200).json(pedidosUsadosListados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar os pedidos usados!"
        }));
    console.log(resposta);
});

router.get("/pedidos-saldo/:id", (req,res)=>{
    const { id } = req.params;
    const resposta = pedidoController.listarNaoUsados(id);
    resposta
        .then(pedidosNaoUsadosListados => res.status(200).json(pedidosNaoUsadosListados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar os pedidos não usados!"
        }));
    console.log(resposta);
});

router.get("/pedidos-vendidos", (req,res)=>{

    const resposta = pedidoController.listarTodosPedidosVendidos();
    resposta
        .then(todosPedidosVendidos => res.status(200).json(todosPedidosVendidos))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar TODOS os pedidos usados!"
        }));
    console.log(resposta);
});

router.get("/kits-vendidos", (req,res)=>{

    const resposta = pedidoController.listarKitsVendidos();
    resposta
        .then(kitsVendidos => res.status(200).json(kitsVendidos))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar kits vendidos!"
        }));
    console.log(resposta);
});

router.get("/pedidos-vendidos-e-nao-usados", (req,res)=>{

    const resposta = pedidoController.listarTodosPedidosNaoUsados();
    resposta
        .then(todosPedidosNaoUsados => res.status(200).json(todosPedidosNaoUsados))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: "Erro ao listar TODOS pedidos NÃO usados!"
        }));
    console.log(resposta);
});

router.post("/pedido", (req,res)=>{
    const novoPedido = req.body;
    const pedido = pedidoController.criar(novoPedido);
    pedido
        .then(pedidoCriado => res.status(201).json(pedidoCriado))
        .catch(error => res.status(400).json(error.message));
});

router.post("/pedido-utilizado", (req,res)=>{
    const utilizacaoPedido = req.body;
    const pedidoUtilizado = pedidoController.registraUtilizacaoPedido(utilizacaoPedido);
    pedidoUtilizado
        .then(utilizacaoRegistrada => res.status(201).json(utilizacaoRegistrada))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: 'Erro ao registrar utilização de pedido!'
        }));
        console.log(pedidoUtilizado);
});

router.put("/atualiza-pedido/:id", (req,res)=>{
    let { id } = req.params;
    console.log(id);
    const resposta = pedidoController.atualizar(id);
    resposta
        .then(pedidoAtualizado => res.status(201).json(pedidoAtualizado))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: 'Erro ao atualizar pedido!'
        }));
        console.log(resposta);
});

module.exports = router;