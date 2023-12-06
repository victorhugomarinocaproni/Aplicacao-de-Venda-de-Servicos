function voltaPagina(){

    const buttonVoltar = document.querySelector('.close-element');

    buttonVoltar.addEventListener('click', e => {
        window.location.href = `http://127.0.0.1:5500/frontendGerente/telaInicial.html`;   
    });
}

voltaPagina();