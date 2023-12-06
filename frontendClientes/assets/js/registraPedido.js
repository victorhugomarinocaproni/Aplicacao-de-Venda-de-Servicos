function registraPedido(){

    const botaoComprar = document.querySelector('#botao-comprar');
    const popUp = document.querySelector('.pop-up');


    botaoComprar.addEventListener('click', event =>{
        popUp.classList.add('remove-pop-up');
        let cartaoCliente = localStorage.getItem('cartaoId');
        const elementoClicado = event.target;

        const verificaServicoSelecionado = verificaElementoCLicado(elementoClicado);

        const dataPedido = getFormatedDate();

        if(verificaServicoSelecionado === 'KMT'){
            const cod_montagem = 'MTG01';
            for(let i = 0; i < 3; i++){

                fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: cod_montagem,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
            }

            const codigo_kit_montagem = 'KMT'
            fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: codigo_kit_montagem,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
        }

        else if(verificaServicoSelecionado === 'KFM'){
            const cod_montagem = 'FMT01';
            for(let i = 0; i < 2; i++){

                fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: cod_montagem,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
            }
            const codigo_kit_formatacao = 'KFM';
            fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: codigo_kit_formatacao,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
        }

        else if(verificaServicoSelecionado === 'KLP'){
            const cod_montagem = 'LPZ01';
            for(let i = 0; i < 5; i++){

                fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: cod_montagem,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
            }

            const codigo_kit_limpeza = 'KLP';
            fetch(`http://localhost:3000/pedido`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status_pedido: 'A',
                        cartao_id: cartaoCliente,
                        cod_servico: codigo_kit_limpeza,
                        data_pedido: dataPedido
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(`Erro: ${error}`));
        }

        else{

            fetch(`http://localhost:3000/pedido`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status_pedido: 'A',
                    cartao_id: cartaoCliente,
                    cod_servico: verificaServicoSelecionado,
                    data_pedido: dataPedido
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(`Erro: ${error}`));
        }
    });      
}

function verificaElementoCLicado(elemento){
    const el = elemento;
    if(el.classList.contains('building')){
        const codServico = 'MTG01';
        return codServico;
    }

    if(el.classList.contains('formatting')){
        const codServico = 'FMT01';
        return codServico;
    }

    if(el.classList.contains('cleaning')){
        const codServico = 'LPZ01';
        return codServico;
    }

    if(el.classList.contains('consultoria')){
        const codServico = 'CNT01';
        return codServico;
    }

    if(el.classList.contains('console')){
        const codServico = 'CNS01';
        return codServico;
    }

    if(el.classList.contains('backup')){
        const codServico = 'BKP01';
        return codServico;
    }

    if(el.classList.contains('kit-montagem')){
        const codServico = 'KMT';
        return codServico;
    }

    if(el.classList.contains('kit-formatacao')){
        const codServico = 'KFM';
        return codServico;
    }

    if(el.classList.contains('kit-limpeza')){
        const codServico = 'KLP';
        return codServico;
    }
}

function getFormatedDate() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se for necessário
    const dia = String(data.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se for necessário
    
    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
}

registraPedido();