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
})


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
    // id = id.replace(':', '');
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

module.exports = router;