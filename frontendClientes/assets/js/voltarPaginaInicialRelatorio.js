const fechar1 = document.querySelector('.close-element-pop-up1');
const fechar2 = document.querySelector('.close-element-pop-up2');
const fechar3 = document.querySelector('.close-element-pop-up3');
const fechar4 = document.querySelector('.close-element-pop-up4');
const fechar5 = document.querySelector('.close-element-pop-up5');
const popUpServicosComprados = document.querySelector('.comprados-report-pop-up');
const popUpServicosUsados = document.querySelector('.usados-report-pop-up');
const popUpRecompensasRecebidas = document.querySelector('.recompensas-recebidas-report-pop-up');
const popUpRecompensasUsadas = document.querySelector('.recompensas-utilizadas-report-pop-up');
const popUpSaldo= document.querySelector('.saldos-report-pop-up');

const botaoFecharPaginaRelatorio = document.querySelector('.close-element');

function sairPaginaRelatorio(){
    botaoFecharPaginaRelatorio.addEventListener('click', e => {
        window.location.href = `http://127.0.0.1:5500/frontendClientes/acessoRelatorioCliente.html`; 
    });
}

function voltarPaginaInicial1(){
     fechar1.addEventListener('click', e => {
        popUpServicosComprados.classList.add('fecha-pop-up');
     });
}

function voltarPaginaInicial2(){
    fechar2.addEventListener('click', e => {
       popUpServicosUsados.classList.add('fecha-pop-up');
    });
}

function voltarPaginaInicial3(){
    fechar3.addEventListener('click', e => {
       popUpRecompensasRecebidas.classList.add('fecha-pop-up');
    });
}

function voltarPaginaInicial4(){
    fechar4.addEventListener('click', e => {
       popUpRecompensasUsadas.classList.add('fecha-pop-up');
    });
}

function voltarPaginaInicial5(){
    fechar5.addEventListener('click', e => {
       popUpSaldo.classList.add('fecha-pop-up');
    });
}

sairPaginaRelatorio();
voltarPaginaInicial1();
voltarPaginaInicial2();
voltarPaginaInicial3();
voltarPaginaInicial4();
voltarPaginaInicial5();