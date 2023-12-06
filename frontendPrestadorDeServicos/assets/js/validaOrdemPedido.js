function verificaSelecionados(){
    const formulario = document.querySelector('.form');

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        let checkedBoxes = formulario.querySelectorAll('input[type=checkbox]:checked');
        const cartaoId = localStorage.getItem('cartaoId');

        const arrCheckedBoxes = [];

        checkedBoxes.forEach(checkbox => {
            arrCheckedBoxes.push(checkbox.id);
        });

        console.log(arrCheckedBoxes);

        arrCheckedBoxes.forEach(element => {

            fetch(`http://localhost:3000/atualiza-pedido/${element}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    if(!response.ok){
                        throw new Error (`Erro na atualização do pedido: ${response.statusText}`);
                    }
                    console.log('Atualização de pedido realizada com êxito!');
                })
                .catch(error => console.log(`Error: ${error}`));

            const dataUtilizacao = getDataFormatada();

            fetch(`http://localhost:3000/pedido-utilizado`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    dataUtilizacao: dataUtilizacao,
                    codPedido: element
                }),
            });

        });

        if(arrCheckedBoxes.length < 2) location.reload();

        else if(arrCheckedBoxes.length === 2){
            const dataRecompensa = getDataFormatada();
            console.log(dataRecompensa);

            fetch(`http://localhost:3000/recompensa`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    data_recebimento: dataRecompensa,
                    cartao_id: cartaoId,
                    nome: "sistema_operacional",
                    abreviacao: 'INST-SO'
                }),
            });

            const popUpAviso = document.querySelector('.pop-up-aviso-recompensa');
            const text = document.querySelector('.titulo-recompensa-ganha');

            popUpAviso.classList.remove('fecha-pop-up-aviso');

            text.innerHTML = `INSTALAÇÃO DE SISTEMA OPERACIONAL`;

        }

        else if(arrCheckedBoxes.length === 3){
            const dataRecompensa = getDataFormatada();
            console.log(dataRecompensa);

            fetch(`http://localhost:3000/recompensa`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    data_recebimento: dataRecompensa,
                    cartao_id: cartaoId,
                    nome: 'manutenção',
                    abreviacao: 'MAN-BO'
                }),
            });

            const popUpAviso = document.querySelector('.pop-up-aviso-recompensa');
            const text = document.querySelector('.titulo-recompensa-ganha');

            popUpAviso.classList.remove('fecha-pop-up-aviso');

            text.innerHTML = `MANUTENÇÃO DE PROBLEMAS`;
        }

        else if(arrCheckedBoxes.length > 3){
            const dataRecompensa = getDataFormatada();
            console.log(dataRecompensa);

            fetch(`http://localhost:3000/recompensa`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    data_recebimento: dataRecompensa,
                    cartao_id: cartaoId,
                    nome: 'antivirus',
                    abreviacao: 'ANT-V'
                }),
            });

            const popUpAviso = document.querySelector('.pop-up-aviso-recompensa');
            const text = document.querySelector('.titulo-recompensa-ganha');

            popUpAviso.classList.remove('fecha-pop-up-aviso');

            text.innerHTML = `INSTALAÇÃO DE ANTIVÍRUS`;
        }
    });
}

function getDataFormatada() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se for necessário
    const dia = String(data.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se for necessário
    
    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
}

function fechaPopUpAvisoRecompensa(){
    const botaoAvancar = document.querySelector('.fechar-aviso');
    const closeIcon = document.querySelector('.icone-x');
    const popUpAviso = document.querySelector('.pop-up-aviso-recompensa');

    botaoAvancar.addEventListener('click', e =>{
        popUpAviso.classList.add('fecha-pop-up-aviso');
        location.reload();
    });

    closeIcon.addEventListener('click', e => {
        popUpAviso.classList.add('fecha-pop-up-aviso');
        location.reload();
    });
}

fechaPopUpAvisoRecompensa();

verificaSelecionados();


