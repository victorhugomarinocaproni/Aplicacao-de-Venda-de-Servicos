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

router.post("/pedido", (req,res)=>{
    const novoPedido = req.body;
    const pedido = pedidoController.criar(novoPedido);
    pedido
        .then(pedidoCriado => res.status(201).json(pedidoCriado))
        .catch(error => res.status(400).json(error.message));
});

router.put("/atualiza/:id", (req,res)=>{
    let { id } = req.params;
    id = id.replace(':', '');
    console.log(id);
    const resposta = recompensaController.atualizar(id);
    resposta
        .then(pedidoAtualizado => res.status(201).json(pedidoAtualizado))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: 'Erro ao atualizar pedido!'
        }));
        console.log(resposta);
});

module.exports = router;