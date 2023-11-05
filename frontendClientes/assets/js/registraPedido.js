function registraPedido(){

    const botaoComprar = document.querySelector('#botao-comprar');
    const popUp = document.querySelector('.pop-up');


    botaoComprar.addEventListener('click', event =>{
        popUp.classList.add('remove-pop-up');
        let cartaoCliente = localStorage.getItem('cartaoId');
        const elementoClicado = event.target;

        const verificaServicoSelecionado = verificaElementoCLicado(elementoClicado);

        fetch(`http://localhost:3000/pedido`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status_pedido: 'A',
                cartao_id: cartaoCliente,
                cod_servico: verificaServicoSelecionado
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(`Erro: ${error}`));
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
}

registraPedido();