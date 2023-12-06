function geraCartao(){

    const botaoGerarCartao = document.querySelector('.gerar-button');
    const displayIdCartaoGerado = document.querySelector('.display-cartao-gerado');

    botaoGerarCartao.addEventListener('click',evento =>{

        limpaDisplay();

        const novoCartao = geraIdAleatorio();
        console.log(novoCartao);    

        fetch(`http://localhost:3000/gerar-cartao`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartao_id: novoCartao
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(`Erro: ${error}`));   

            displayIdCartaoGerado.innerHTML += `${novoCartao}`;

    });

    
    
}

geraCartao();
function geraIdAleatorio (){
    return Math.floor(Math.random() * 9000) + 1000;
}

function limpaDisplay(){
    const displayIdCartaoGerado = document.querySelector('.display-cartao-gerado');
    displayIdCartaoGerado.innerHTML = 'Seu n° de cartão: ';
}




