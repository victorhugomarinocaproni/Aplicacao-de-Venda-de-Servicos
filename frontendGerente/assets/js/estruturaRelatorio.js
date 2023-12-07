function getDados(){

    fetch(`http://localhost:3000/pedidos-vendidos`)
        .then(response => response.json())
        .then( (servicos) => {

            const objetoTodosServicosQuantificados = quantificaServicos(servicos);
            mostraQuantidadeServicosNaTela(objetoTodosServicosQuantificados);

            })
        .catch(error => {
            console.log(error);
        });

    fetch(`http://localhost:3000/kits-vendidos`)
    .then(response => response.json())
    .then( (kits) => {

        const qtdKits = quatificaKits(kits); 
        mostraQuantidadeKitsNaTela(qtdKits);

        })
    .catch(error => {
        console.log(error);
    });

    fetch(`http://localhost:3000/pedidos-vendidos-e-nao-usados`)
    .then(response => response.json())
    .then( (servicosNaoRealizados) => {

        const qtdServicosNaoUsados = quantificaServicosNaoUsados(servicosNaoRealizados);
        mostraQuantidadeServicosNaoUsadosNaTela(qtdServicosNaoUsados);

        })
    .catch(error => {
        console.log(error);
    });

    fetch(`http://localhost:3000/recompensas-geradas`)
    .then(response => response.json())
    .then( (recompensasGeradas) => {

        const qtdRecompensasGeradas = quantificaRecompensasGeradas(recompensasGeradas);
        mostraQuantidadeRecompensasGeradasNaTela(qtdRecompensasGeradas);

        })
    .catch(error => {
        console.log(error);
    });

}

function atualizaDados(){
    const buttonAtualizarDados = document.querySelector('.update-data-button');

    buttonAtualizarDados.addEventListener('click', e => {
        getDados();
    });
}

function quantificaServicos(todosPedidosDoBanco){

    let contadorServicosIndividuais = 0;
    
    let qtdMontagem = 0;
    let qtdLimpeza = 0;
    let qtdFormatacao = 0;
    let qtdBackup = 0;
    let qtdConsultoria = 0;
    let qtdConsole = 0;

    todosPedidosDoBanco.forEach(pedido => {

        contadorServicosIndividuais++;

        if(pedido.cod_servico === 'MTG01') qtdMontagem++;
        else if(pedido.cod_servico === 'LPZ01') qtdLimpeza++;
        else if(pedido.cod_servico === 'FMT01') qtdFormatacao++;
        else if(pedido.cod_servico === 'BKP01') qtdBackup++;
        else if(pedido.cod_servico === 'CNT01') qtdConsultoria++;
        else if(pedido.cod_servico === 'CNS01') qtdConsole++;

    });

    return {
        servicosIndividuais: contadorServicosIndividuais,
        montagem: qtdMontagem,
        limpeza: qtdLimpeza,
        formatacao: qtdFormatacao,
        backup: qtdBackup,
        consultoria: qtdConsultoria,
        console: qtdConsole
    };
}

function quatificaKits(todosKitsDoBanco){
    let qtdTotalKits = 0;
    todosKitsDoBanco.forEach(kit => {
        qtdTotalKits++;
    });
    return qtdTotalKits;
}

function quantificaServicosNaoUsados(servicosNaoUsados){
    let qtdServicosNaoUsados = 0;
    servicosNaoUsados.forEach(servico => {
        qtdServicosNaoUsados++;
    });
    return qtdServicosNaoUsados;
}

function quantificaRecompensasGeradas(recompensasGeradas){
    let qtdRecompensasGeradas = 0;
    recompensasGeradas.forEach(recompensa => {
        qtdRecompensasGeradas++;
    });
    return qtdRecompensasGeradas;
}

function mostraQuantidadeServicosNaTela(objetoQuantificado){
    const displayServicosIndividuais = document.querySelector('.qtd-servicos');
    const displayMontagens = document.querySelector('.qtd-montagem');
    const displayLimpezas = document.querySelector('.qtd-limpezas');
    const displayFormatacoes = document.querySelector('.qtd-formatacoes');
    const displayConsultorias = document.querySelector('.qtd-consultorias');
    const displayConsoles = document.querySelector('.qtd-consoles');
    const displayBackups = document.querySelector('.qtd-backups');

    displayServicosIndividuais.innerHTML = `${objetoQuantificado.servicosIndividuais}`;
    displayMontagens.innerHTML = `${objetoQuantificado.montagem}`;
    displayLimpezas.innerHTML = `${objetoQuantificado.limpeza}`;
    displayFormatacoes.innerHTML = `${objetoQuantificado.formatacao}`;
    displayConsultorias.innerHTML = `${objetoQuantificado.consultoria}`;
    displayConsoles.innerHTML = `${objetoQuantificado.console}`;
    displayBackups.innerHTML = `${objetoQuantificado.backup}`;
}

function mostraQuantidadeKitsNaTela(qtdKits){
    const displayKits = document.querySelector('.qtd-kits');

    displayKits.innerHTML = `${qtdKits}`;
}

function mostraQuantidadeServicosNaoUsadosNaTela(qtdServicosNaoUsados){
    const displayServicosNaoUsados = document.querySelector('.servicos-nao-usados');

    displayServicosNaoUsados.innerHTML = `${qtdServicosNaoUsados}`;
}

function mostraQuantidadeRecompensasGeradasNaTela(qtdRecompensasGeradas){
    const displayRecompensasGeradas = document.querySelector('.qtd-recompensas');

    displayRecompensasGeradas.innerHTML = `${qtdRecompensasGeradas}`;
}

// Inicializa as Funções Principais
getDados();
atualizaDados();