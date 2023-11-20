const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE' // Adicionei PUT à lista de métodos permitidos
    );
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Condição para pré-voo (preflight)
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); // Responde ao pré-voo indicando que PUT é permitido
    } else {
        next(); // Chama o próximo middleware para as outras requisições que não são OPTIONS
    }
};

module.exports = cors;
