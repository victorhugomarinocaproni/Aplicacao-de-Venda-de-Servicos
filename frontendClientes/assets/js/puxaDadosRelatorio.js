const buttonServicosComprados = document.querySelector('.servicos-comprados-button');
const buttonServicosUsados = document.querySelector('.servicos-usados-button');
const buttonRecompensasRecebidas = document.querySelector('.recompensas-ganhas-button');
const buttonRecompensasUsadas = document.querySelector('.recompensas-usadas-button');
const buttonSaldo = document.querySelector('.saldos-button');
const cartaoCliente = localStorage.getItem('cartaoId');

function getDadosServicosComprados(){

    buttonServicosComprados.addEventListener('click', e => {

        zeraDisplaysParaAtualizar();
    
        fetch(`http://localhost:3000/pedidos-comprados/${cartaoCliente}`)
            .then(response => response.json())
            .then( (dadosRecebidos) => {

                const dadosTratados = interpretaCodPedido(dadosRecebidos);

                estruturaRelatorioCompras(dadosTratados);

            })
            .catch(error => {
                console.log(error);
            });
    });
}

function getDadosServicosUsados(){

    buttonServicosUsados.addEventListener('click', e => {

        zeraDisplaysParaAtualizar();
    
        fetch(`http://localhost:3000/pedidos-usados/${cartaoCliente}`)
            .then(response => response.json())
            .then( (dadosRecebidos) => {

                const dadosTratados = interpretaCodPedidoUtilizado(dadosRecebidos);
                console.log(dadosTratados);
                estruturaRelatorioServicosUsados(dadosTratados);

            })
            .catch(error => {
                console.log(error);
            });
    });
}

function getDadosRecompensasRecebidas(){

    buttonRecompensasRecebidas.addEventListener('click', e => {

        zeraDisplaysParaAtualizar();
    
        fetch(`http://localhost:3000/recompensas-recebidas/${cartaoCliente}`)
            .then(response => response.json())
            .then( (dadosRecebidos) => {

                console.log(dadosRecebidos);
                const dadosTratados = interpretaAbreviacaoRecompensa(dadosRecebidos);

                estruturaRelatorioRecompensasRecebidas(dadosTratados);

            })
            .catch(error => {
                console.log(error);
            });
    });
}

function getDadosRecompensasUtilizadas(){

    buttonRecompensasUsadas.addEventListener('click', e => {

        zeraDisplaysParaAtualizar();

        fetch(`http://localhost:3000/recompensas-usadas/${cartaoCliente}`)
            .then(response => response.json())
            .then( (dadosRecebidos) => {

                const dadosTratados = interpretaAbreviacaoRecompensaUtilizada(dadosRecebidos);
                console.log(dadosTratados);

                estruturaRelatorioRecompensasUtilizadas(dadosTratados);

            })
            .catch(error => {
                console.log(error);
            });
    });
}

function getDadosSaldo(){

    buttonSaldo.addEventListener('click', e => {

        zeraDisplaysParaAtualizar();

        fetch(`http://localhost:3000/pedidos-saldo/${cartaoCliente}`)
            .then(response => response.json())
            .then( (dadosRecebidosPedidos) => {

                const dadosPedidosTratados = interpretaCodPedido(dadosRecebidosPedidos);
                console.log(dadosPedidosTratados);

                estruturaRelatorioServicosNaoUsados(dadosPedidosTratados);


            })
            .catch(error => {
                console.log(error);
            });
            
        fetch(`http://localhost:3000/recompensas-saldo/${cartaoCliente}`)
        .then(response => response.json())
        .then( (dadosRecebidosRecompensas) => {

            const dadosRecompensaTratados = interpretaAbreviacaoRecompensa(dadosRecebidosRecompensas);
            console.log(dadosRecompensaTratados);

            estruturaRelatorioRecompensasNaoUsadas(dadosRecompensaTratados);

        })
        .catch(error => {
            console.log(error);
        });
    });
}

function interpretaCodPedido(dados){

    const listaObjetosTratados = [];

    dados.forEach(element => {

        if(element.cod_servico == 'FMT01'){
            let obj = {
                nome: 'formatação',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'MTG01'){
            let obj = {
                nome: 'montagem',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'LPZ01'){
            let obj = {
                nome: 'limpeza',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'BKP01'){
            let obj = {
                nome: 'backup',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'CNS01'){
            let obj = {
                nome: 'console',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'CNT01'){
            let obj = {
                nome: 'consultoria',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KFM'){
            let obj = {
                nome: 'kit formatação',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KLP'){
            let obj = {
                nome: 'kit limpeza',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KMT'){
            let obj = {
                nome: 'kit montagem',
                data: element.data_pedido
            }
            listaObjetosTratados.push(obj);
        }
    });
    return listaObjetosTratados;
}

function interpretaCodPedidoUtilizado(dados){

    const listaObjetosTratados = [];

    dados.forEach(element => {

        if(element.cod_servico == 'FMT01'){
            let obj = {
                nome: 'formatação',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'MTG01'){
            let obj = {
                nome: 'montagem',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'LPZ01'){
            let obj = {
                nome: 'limpeza',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'BKP01'){
            let obj = {
                nome: 'backup',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'CNS01'){
            let obj = {
                nome: 'console',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'CNT01'){
            let obj = {
                nome: 'consultoria',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KFM'){
            let obj = {
                nome: 'kit formatação',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KLP'){
            let obj = {
                nome: 'kit limpeza',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
        else if(element.cod_servico == 'KMT'){
            let obj = {
                nome: 'kit montagem',
                data: element.data_utilizacao_ped
            }
            listaObjetosTratados.push(obj);
        }
    });
    return listaObjetosTratados;
}

function interpretaAbreviacaoRecompensa(dados){
    const listaDadosTratados = [];

    dados.forEach(element => {

        if(element.abreviacao === 'INST-SO'){
            let obj = {
                nome: 'instalação SO',
                data: element.data_recebimento
            }
            listaDadosTratados.push(obj);
        }
        else if(element.abreviacao === 'MAN-BO'){
            let obj = {
                nome: 'manutenção',
                data: element.data_recebimento
            }
            listaDadosTratados.push(obj);
        }
        else if(element.abreviacao === 'ANT-V'){
            let obj = {
                nome: 'instalação antivírus',
                data: element.data_recebimento
            }
            listaDadosTratados.push(obj);
        }
    });
    return listaDadosTratados;
}

function interpretaAbreviacaoRecompensaUtilizada(dados){
    const listaDadosTratados = [];

    dados.forEach(element => {

        if(element.abreviacao === 'INST-SO'){
            let obj = {
                nome: 'instalação SO',
                data: element.data_utilizacao_rec
            }
            listaDadosTratados.push(obj);
        }
        else if(element.abreviacao === 'MAN-BO'){
            let obj = {
                nome: 'manutenção',
                data: element.data_utilizacao_rec
            }
            listaDadosTratados.push(obj);
        }
        else if(element.abreviacao === 'ANT-V'){
            let obj = {
                nome: 'instalação antivírus',
                data: element.data_utilizacao_rec
            }
            listaDadosTratados.push(obj);
        }
    });
    return listaDadosTratados;
}

function estruturaRelatorioCompras(arrayDadosTratados){

    const displayServicosIndividuais = document.querySelector('.display-servicos-individuais');
    const displayKitServicos = document.querySelector('.display-kit-servicos');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiServicos(element);

        if(element.nome == 'kit montagem' || element.nome == 'kit formatação' || element.nome == 'kit limpeza'){
            displayKitServicos.appendChild(novaLi);
        }
        else{
            displayServicosIndividuais.appendChild(novaLi);
        }
    });
}

function estruturaRelatorioServicosUsados(arrayDadosTratados){

    const displayServicosUsados = document.querySelector('.display-servicos-usados');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiServicos(element);

        displayServicosUsados.appendChild(novaLi);
    });
}

function estruturaRelatorioRecompensasRecebidas(arrayDadosTratados){

    const displayRecompensasRecebidas = document.querySelector('.display-recompensas-recebidas');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiRecompensas(element);

        displayRecompensasRecebidas.appendChild(novaLi);
    });
}

function estruturaRelatorioRecompensasUtilizadas(arrayDadosTratados){

    const displayRecompensasUtilizadas = document.querySelector('.display-recompensas-utilizadas');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiRecompensas(element);

        displayRecompensasUtilizadas.appendChild(novaLi);
    });
}

function estruturaRelatorioServicosNaoUsados(arrayDadosTratados){

    const displayServicosNaoUsados = document.querySelector('.display-saldos-pedidos');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiServicos(element);

        displayServicosNaoUsados.appendChild(novaLi);
    });
}

function estruturaRelatorioRecompensasNaoUsadas(arrayDadosTratados){

    const displayRecompensasNaoUtilizadas = document.querySelector('.display-saldo-recompensas');

    arrayDadosTratados.forEach(element => {

        let novaLi = criaNovaLiRecompensas(element);

        displayRecompensasNaoUtilizadas.appendChild(novaLi);
    });
}

function criaNovaLiServicos(dadoTratado){

    const dataFormata = formataDataServicos(dadoTratado);

    const li = document.createElement('li');
    li.innerHTML = `${dadoTratado.nome} ${dataFormata}`;
    return li;
}

function criaNovaLiRecompensas(dadoTratado){

    const dataFormata = formataDataRecompensas(dadoTratado);

    const li = document.createElement('li');
    li.innerHTML = `${dadoTratado.nome} ${dataFormata}`;
    return li;
}

function formataDataServicos(dadoTratado){
    const data = dadoTratado.data;

    if(data != null){
        let index = data.indexOf('T');
        let dataFormatada = data.slice(0, index).replaceAll("-", "/");
        console.log(dataFormatada);
        return dataFormatada;
    }
    return null;
}

function formataDataRecompensas(dadoTratado){
    let data = dadoTratado.data;

    if(data != null){
        let index = data.indexOf('T');
        let dataFormatada = data.slice(0, index).replaceAll("-", "/");
        console.log(dataFormatada);
        return dataFormatada;
    }
    return null;
}

function zeraDisplaysParaAtualizar(){
    const displayServicosIndividuais = document.querySelector('.display-servicos-individuais');
    const displayKitServicos = document.querySelector('.display-kit-servicos');
    const displayServicosUsados = document.querySelector('.display-servicos-usados');
    const displayRecompensasRecebidas = document.querySelector('.display-recompensas-recebidas');
    const displayRecompensasUtilizadas = document.querySelector('.display-recompensas-utilizadas');
    const displayServicosNaoUsados = document.querySelector('.display-saldos-pedidos');
    const displayRecompensasNaoUtilizadas = document.querySelector('.display-saldo-recompensas');

    displayServicosIndividuais.innerHTML = ``;
    displayKitServicos.innerHTML = ``;
    displayServicosUsados.innerHTML = ``;
    displayRecompensasRecebidas.innerHTML = ``;
    displayRecompensasUtilizadas.innerHTML = ``;
    displayServicosNaoUsados.innerHTML = ``;
    displayRecompensasNaoUtilizadas.innerHTML = ``;
}

//Inicializa as Funções Principais:
getDadosServicosComprados();
getDadosServicosUsados();
getDadosRecompensasRecebidas();
getDadosRecompensasUtilizadas();
getDadosSaldo();




