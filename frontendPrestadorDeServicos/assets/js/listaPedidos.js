function listaPedidos(){
    const cartaoCliente = localStorage.getItem('cartaoId');
    fetch(`http://localhost:3000/pedido/${cartaoCliente}`)
        .then(response => response.json())
        .then( (dadosRecebidos) => {

            const codeArray = transformIntoArray(dadosRecebidos); // cria um array com os códigos de serviços
            console.log(codeArray);

            const codesObject = createObjectsArray(dadosRecebidos); // Lista com objetos
            console.log(codesObject);

            mostraPedidosNaTela(codeArray, codesObject);

        })
        .catch(error => {
            console.log(error);
        });
}

listaPedidos();

function transformIntoArray(objectArray){
    const codeArray = [];
    for(let code of objectArray){
        codeArray.push(code.cod_servico);
    }
    return codeArray;
}

function createObjectsArray(dados){

    const objectArray = [];

    for(let code of dados){

        let obj = {
            serviceCode: code.cod_servico,
            orderCode: code.cod_pedido
        };

        objectArray.push(obj);
    }
    return objectArray;

}

function mostraPedidosNaTela(filteredArray, arrayDeObjetos){

    const mainContainer = document.querySelector('.services-box');

    if(filteredArray.length == 0){
        limpaTela();
        const p = criaParagrafo();
        mainContainer.appendChild(p);
    } else {

        for(let item of arrayDeObjetos){
            console.log(item);
            criaNovoElementoHtml(item.serviceCode, item.orderCode);
        }

        const formulario = document.querySelector('.form');
        const botao = criaBotao();
        formulario.appendChild(botao);
    }
}

function criaParagrafo(){

    const novoParagrafo = document.createElement('p');

    novoParagrafo.innerHTML = `VOCÊ NÃO TEM ITENS COMPRADOS!`;
    novoParagrafo.classList.add('sem-pedidos');

    return novoParagrafo;
} 

function criaNovoElementoHtml(servicoCode, pedidoCode){

    if(servicoCode == 'KMT' || servicoCode == 'KFM' || servicoCode == 'KLP') return;

    const formulario = document.querySelector('.form');

    const label = writeLabel(servicoCode);
    const novoInput = writeInput(pedidoCode);
    const botaoEnviar = criaBotao();

    formulario.appendChild(label);
    formulario.appendChild(novoInput);

}

function criaBotao(){
    const button = document.createElement('input');
    button.setAttribute("type", "submit");
    button.classList.add('send-order-button');

    return button;
}

function writeLabel(servicoCode){

    let text = interpretaCodigoLabel(servicoCode);

    const label = document.createElement('label');
    label.classList.add('labels');
    label.innerHTML = `${text}`;
    return label;
}

function interpretaCodigoLabel(codigoServico){

    if(codigoServico == 'FMT01') return `FORMATACAÇÃO`;
    else if (codigoServico == 'LPZ01') return `LIMPEZA`;
    else if (codigoServico == 'MTG01') return `MONTAGEM`;
    else if (codigoServico == 'CNT01') return `CONSULTORIA`;
    else if (codigoServico == 'CNS01') return `CONSOLE`;
    else if (codigoServico == 'BKP01') return `BACKUP`;
}

function writeInput(pedidoCode){

    const novoInput = document.createElement('input');
    novoInput.setAttribute("type", "checkbox");
    novoInput.classList.add('qtd-box');
    novoInput.setAttribute('id',`${pedidoCode}`);

    return novoInput;
}

function removeServiceFromArray(filteredArray){
    const removido = filteredArray.shift();
    return filteredArray;
}

function limpaTela(){
    const mainContainer = document.querySelector('.services-box');
    mainContainer.innerHTML = ``;
}



