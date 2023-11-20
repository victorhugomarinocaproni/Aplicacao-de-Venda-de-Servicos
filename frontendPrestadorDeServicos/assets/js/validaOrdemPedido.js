function verificaSelecionados(){
    const formulario = document.querySelector('.form');

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        let caixasMarcadas = document.querySelectorAll('input[type=checkbox]:checked');
        const cartaoId = localStorage.getItem('cartaoId');

        const checkboxesSelecionadas = [];

        caixasMarcadas.forEach(checkbox => {
            checkboxesSelecionadas.push(checkbox.id);
        });

        console.log(checkboxesSelecionadas);

        checkboxesSelecionadas.forEach(elemento => {
            fetch(`http://localhost:3000/atualiza/:${elemento}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    if(!response.ok){
                        throw new Error (`Erro na atualização do pedido: ${response.statusText}`);
                    }
                    console.log('Atualização realizada com êxito!');
                })
                .catch(error => console.log(`Error: ${error}`));
        });

        if(checkboxesSelecionadas.length === 2){
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
            })

            alert('Você ganhou uma recompensa: instalção de sistema operacional!');
        }

        if(checkboxesSelecionadas.length === 3){
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
            })

            alert('Você ganhou uma recompensa: manutenção de qualquer problema!');
        }

        if(checkboxesSelecionadas.length > 3){
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
            })

            alert('Você ganhou uma recompensa: instalação de antivírus!');
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


verificaSelecionados();


