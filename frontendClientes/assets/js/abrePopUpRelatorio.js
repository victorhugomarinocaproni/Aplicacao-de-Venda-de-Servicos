const botaoServicosComprados = document.querySelector('.servicos-comprados-button');
const botaoServicosUsados = document.querySelector('.servicos-usados-button');
const botaoRecompensas = document.querySelector('.recompensas-ganhas-button');
const botaoRecompensasUtilizadas = document.querySelector('.recompensas-usadas-button');
const botaoSaldos = document.querySelector('.saldos-button');

const popUpComprados = document.querySelector('.comprados-report-pop-up');
const popUpUsados = document.querySelector('.usados-report-pop-up');
const popUpRecompensas = document.querySelector('.recompensas-recebidas-report-pop-up');
const popUpRecompensasUtilizadas = document.querySelector('.recompensas-utilizadas-report-pop-up');
const popUpSaldos = document.querySelector('.saldos-report-pop-up');

function abrePopUpComprados(){
    botaoServicosComprados.addEventListener('click', e => {
        popUpComprados.classList.remove('fecha-pop-up');
    });
}

function abrePopUpUsados(){
    botaoServicosUsados.addEventListener('click', e => {
        popUpUsados.classList.remove('fecha-pop-up');
    });
}

function abrePopUpRecompensasRecebidas(){
    botaoRecompensas.addEventListener('click', e => {
        popUpRecompensas.classList.remove('fecha-pop-up');
    });
}

function abrePopUpRecompensasUtilizadas(){
    botaoRecompensasUtilizadas.addEventListener('click', e => {
        popUpRecompensasUtilizadas.classList.remove('fecha-pop-up');
    });
}

function abrePopUpSaldos(){
    botaoSaldos.addEventListener('click', e => {
        popUpSaldos.classList.remove('fecha-pop-up');
    });
}

abrePopUpComprados();
abrePopUpUsados();
abrePopUpRecompensasRecebidas();
abrePopUpRecompensasUtilizadas();
abrePopUpSaldos();