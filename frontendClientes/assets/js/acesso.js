const botaoEntrar = document.querySelector('.login-button');
const displayInput = document.querySelector('#login-input');

function reajustaDisplay(){
    displayInput.addEventListener('click', e =>{
        limpaDisplayInput();
    })
}
    
function puxaDadosCartao(){
    botaoEntrar.addEventListener('click', event =>{
        fetch(`http://localhost:3000/cartao`)
            .then(response => response.json())
            .then(data => {validaAcesso(data)});   
    });
}

function validaAcesso(arrayDeCartoes){
    const inputUsuario = document.querySelector('#login-input');
    const numeroDigitadoInput = inputUsuario.value;
    arrayDeCartoes.forEach(item => {
        if(item.cartao_id == numeroDigitadoInput){
            localStorage.setItem('cartaoId', numeroDigitadoInput);
            window.location.href = `http://127.0.0.1:5500/frontendClientes/menu-de-compras.html`;   
        } else {
            inputUsuario.value = 'Número de Cartão inválido, tente novamente';
            console.log('Número de Cartão inválido, tente novamente');
        }
    })
}

function limpaDisplayInput(){
    const inputUsuario = document.querySelector('#login-input');
    inputUsuario.value = '';
}

puxaDadosCartao();
reajustaDisplay();
