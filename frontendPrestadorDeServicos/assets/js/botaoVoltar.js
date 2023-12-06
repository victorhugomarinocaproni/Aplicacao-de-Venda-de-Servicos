function voltar(){
    const botao = document.querySelector('.close-element');

    botao.addEventListener('click', e => {
        window.location.href = `http://127.0.0.1:5500/frontendPrestadorDeServicos/telaInicial.html`;
    });
}
voltar();