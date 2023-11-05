const routerCartao = require("./cartaoRota");
const routerPedido = require("./pedidoRota");
const cors = require("../database/cors");

module.exports = (app) =>{
    app.use(cors);
    app.use(routerCartao);
    app.use(routerPedido);
}