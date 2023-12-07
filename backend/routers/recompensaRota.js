const { Router } = require("express");

const router = Router();
const recompensaController = require("../controllers/recompensaController");

router.get("/lista-recompensas/:id", (req, res) => {
    const { id } = req.params;
    const resposta = recompensaController.listar(id);
    resposta
        .then(recompesasListadas => res.status(201).json(recompesasListadas))
        .catch(error => res.status(401).json({
            erro: error.message,
            mensagem: "Deu erro ao listar as recompensas"
        })); 
});

router.get("/recompensas-recebidas/:id", (req, res) => {
    const { id } = req.params;
    const resposta = recompensaController.listarRecompensasRecebidas(id);
    resposta
        .then(recompesasListadas => res.status(201).json(recompesasListadas))
        .catch(error => res.status(401).json({
            erro: error.message,
            mensagem: "Deu erro ao listar as recompensas recebidas"
        })); 
});

router.get("/recompensas-usadas/:id", (req, res) => {
    const { id } = req.params;
    const resposta = recompensaController.listarRecompensasUtilizadas(id);
    resposta
        .then(recompesasListadas => res.status(201).json(recompesasListadas))
        .catch(error => res.status(401).json({
            erro: error.message,
            mensagem: "Deu erro ao listar as recompensas utilizadas"
        })); 
});

router.get("/recompensas-saldo/:id", (req, res) => {
    const { id } = req.params;
    const resposta = recompensaController.listarRecompensasNaoUtilizadas(id);
    resposta
        .then(recompesasListadas => res.status(201).json(recompesasListadas))
        .catch(error => res.status(401).json({
            erro: error.message,
            mensagem: "Deu erro ao listar as recompensas não utilizadas"
        })); 
});

router.get("/recompensas-geradas", (req, res) => {

    const resposta = recompensaController.listarRecompensasGeradas();
    resposta
        .then(recompensasGeradas => res.status(201).json(recompensasGeradas))
        .catch(error => res.status(401).json({
            erro: error.message,
            mensagem: "Erro ao listar TODAS as recompensas geradas"
        })); 
});

router.post("/recompensa", (req,res)=>{
    const novaRecompensa = req.body;
    console.log(novaRecompensa);
    const recompensa = recompensaController.criar(novaRecompensa);
    recompensa
        .then(recompensaCriada => res.status(201).json(recompensaCriada))
        .catch(error => res.status(400).json(error.message));
});

router.put("/atualiza-recompensa/:id", (req,res)=>{
    let { id } = req.params;
    console.log(id);
    const resposta = recompensaController.atualizar(id);
    resposta
        .then(pedidoAtualizado => res.status(201).json(pedidoAtualizado))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: 'Erro ao atualizar recompensa!'
        }));
        console.log(resposta);
});

router.post("/recompensa-utilizada", (req,res)=>{
    const reqBody = req.body;
    const recompensaUtilizada = recompensaController.registraUtilizacaoRecompensa(reqBody);
    recompensaUtilizada
        .then(recompensaUtilizada => res.status(201).json(recompensaUtilizada))
        .catch(error => res.status(400).json({
            error: error.message,
            mensagem: 'Erro ao registrar utilização de recompensa!'
        }));
        console.log(recompensaUtilizada);
});

module.exports = router;