function getRecompensas(){

    const cartaoId = localStorage.getItem('cartaoId');

    fetch(`http://localhost:3000/lista-recompensas/${cartaoId}`)
        .then(response => response.json())
        .then( (recompensasRecebidas) => {

            const popUp = document.querySelector('.pop-up-container');
            const formularioRecompensas = document.querySelector('.form-recompensa');

            if(recompensasRecebidas.length != 0){

                console.log(recompensasRecebidas);

                popUp.classList.remove('fecha-pop-up');

                const arr = [];
                
                recompensasRecebidas.forEach(recompensa =>{

                    const obj = {
                        abreviacao:recompensa.abreviacao,
                        codRecompensa: recompensa.cod_recompensa
                    }

                    arr.push(obj);

                
                });
                console.log(arr)
                mostraRecompensasNaTela(arr);

                formularioRecompensas.addEventListener('submit', event => {
                    event.preventDefault();
            
                    let caixasMarcadas = document.querySelectorAll('input[type=checkbox]:checked');
                    const cartaoId = localStorage.getItem('cartaoId');
            
                    const checkboxesSelecionadas = [];
            
                    caixasMarcadas.forEach(checkbox => {
                        checkboxesSelecionadas.push(checkbox.id);
                    });
            
                    console.log(checkboxesSelecionadas);
            
                    checkboxesSelecionadas.forEach(elemento => {
                        fetch(`http://localhost:3000/atualiza-recompensa/${elemento}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        })
                            .then(response => {
                                if(!response.ok){
                                    throw new Error (`Erro na atualização do pedido: ${response.statusText}`);
                                }
                                console.log('Atualização da recompensa realizada com êxito!');
                            })
                            .catch(error => console.log(`Error: ${error}`));
                    });
                });
            }
            else {

                popUp.classList.add('fecha-pop-up');

            }
        })
        .catch(error => {
            console.log(error);
        });
}

getRecompensas();

function mostraRecompensasNaTela(arr){

    for(let elemento of arr){
        console.log(elemento);
        criaNovoElemento(elemento.codRecompensa, elemento.abreviacao);
    }

    const formulario = document.querySelector('.form-recompensa');
    const botao = criaButton();
    formulario.appendChild(botao);
    
}

function criaNovoElemento(recompensaCode, recompensaAbreviacao){

    const formulario = document.querySelector('.form-recompensa');

    const label = criaLabel(recompensaAbreviacao);
    const novoInput = craInput(recompensaCode);
    const botaoEnviar = criaBotao();

    formulario.appendChild(label);
    formulario.appendChild(novoInput);

}

function criaButton(){
    const botao = document.createElement('input');
    botao.setAttribute("type", "submit");
    botao.classList.add('send-order-button');

    return botao;
}


function criaLabel(recompensaAbreviacao){

    let text = interpretaLabel(recompensaAbreviacao);

    const label = document.createElement('label');
    label.classList.add('labels');
    label.innerHTML = `${text}`;
    return label;
}


function interpretaLabel(recompensaAbreviacao){

    if(recompensaAbreviacao == 'INST-SO') return `INSTALAÇÃO S.O.`;
    else if (recompensaAbreviacao == 'MAN-BO') return `MANUTENÇÃO DE PROBLEMAS`;
    else if (recompensaAbreviacao == 'ANT-V') return `INSTALAÇÃO ANTIVÍRUS`;

}

function craInput(recompensaCode){

    const novoInput = document.createElement('input');
    novoInput.setAttribute("type", "checkbox");
    novoInput.classList.add('qtd-box');
    novoInput.setAttribute('id',`${recompensaCode}`);

    return novoInput;
}


function fechaPopUp(){

    const fecha = document.querySelector('.close-element-pop-up');
    const popUp = document.querySelector('.pop-up-container');

    fecha.addEventListener('click', e => {
        popUp.classList.add('fecha-pop-up');
    })
}

fechaPopUp();