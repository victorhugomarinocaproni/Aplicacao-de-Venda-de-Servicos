const { Router } = require("express");

const router = Router();
const pedidoController = require("../controllers/pedidoController");

router.get("/pedido", (req,res)=>{
    res.send('Chegou aqui ta funfand o pedido...');
});

router.post("/pedido", (req,res)=>{
    const novoPedido = req.body;
    const pedido = pedidoController.criar(novoPedido);
    pedido
        .then(pedidoCriado => res.status(201).json(pedidoCriado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;