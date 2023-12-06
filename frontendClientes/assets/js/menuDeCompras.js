function myApplication(){
    const popUp = document.querySelector('.pop-up');
    const popUpTitle = popUp.querySelector('.pop-up-title');
    const popUpDesc = popUp.querySelector('.pop-up-desc');
    const popUpPrice = popUp.querySelector('.pop-up-price');
    const popUpBackground = popUp.querySelector('.product-img');
    const botaoComprar = popUp.querySelector('.add-to-cart-button');


    function managePopUp(){
        document.addEventListener('click', event => {
            const element = event.target;
            if(element.classList.contains('card')){
                popUp.classList.remove('remove-pop-up');
                rewritePopUp(element);
            }
            else{
                popUp.classList.add('remove-pop-up');
                resetPopUpBackground();
            }
            
        });
    }

    function resetPopUpBackground()
    {
        popUpBackground.classList.remove('building-bg');
        popUpBackground.classList.remove('formatting-bg');
        popUpBackground.classList.remove('cleaning-bg');
        popUpBackground.classList.remove('consultoria-bg');
        popUpBackground.classList.remove('console-bg');
        popUpBackground.classList.remove('backup-bg');

        botaoComprar.classList.remove('building');
        botaoComprar.classList.remove('formatting');
        botaoComprar.classList.remove('cleaning');
        botaoComprar.classList.remove('consultoria');
        botaoComprar.classList.remove('console');
        botaoComprar.classList.remove('backup');
        botaoComprar.classList.remove('kit-montagem');
        botaoComprar.classList.remove('kit-formatacao');
        botaoComprar.classList.remove('kit-limpeza');
    }

    function rewritePopUp(element){
        
        if(element.classList.contains('building-card')){
            popUpBackground.classList.add('building-bg');
            popUpTitle.innerHTML = 'Montagem';
            popUpDesc.innerHTML = 'Realizamos a montagem completa do seu computador!'
            popUpPrice.innerHTML = 'R$ 50,00';
            botaoComprar.classList.add('building');
        }

        if(element.classList.contains('formatting-card')){
            popUpBackground.classList.add('formatting-bg');
            popUpTitle.innerHTML = 'Formatação';
            popUpDesc.innerHTML = 'Realizamos a formatação completa do seu computador!';
            popUpPrice.innerHTML = 'R$ 30,00';
            botaoComprar.classList.add('formatting');
        }

        if(element.classList.contains('cleaning-card')){
            popUpBackground.classList.add('cleaning-bg');
            popUpTitle.innerHTML = 'Limpeza';
            popUpDesc.innerHTML = 'Realizamos a limpeza completa do seu computador!';
            popUpPrice.innerHTML = 'R$ 15,00';
            botaoComprar.classList.add('cleaning');
        }

        if(element.classList.contains('consultoria-card')){
            popUpBackground.classList.add('consultoria-bg');
            popUpTitle.innerHTML = 'Consultoria';
            popUpDesc.innerHTML = 'Quer montar uma máquina mas não entende de Hardware? Vem trocar uma ideia com a gente que nós te ajudamos!';
            popUpPrice.innerHTML = 'R$ 50,00';
            botaoComprar.classList.add('consultoria');
        }

        if(element.classList.contains('console-card')){
            popUpBackground.classList.add('console-bg');
            popUpTitle.innerHTML = 'Console';
            popUpDesc.innerHTML = 'Trabalhamos também com manutenção e configuração de consoles! Traga sua máquina para que possamos lhe ajudar.';
            popUpPrice.innerHTML = 'R$ 35,00';
            botaoComprar.classList.add('console');
        }

        if(element.classList.contains('backup-card')){
            popUpBackground.classList.add('backup-bg');
            popUpTitle.innerHTML = 'Backup';
            popUpDesc.innerHTML = 'Quer trocar sua máquina antiga mas está com os dados todos salvos em meio físico? Sem problemas, realizamos o backup completo de seus dados para que possa trocar de máquina!';
            popUpPrice.innerHTML = 'R$ 100,00';
            botaoComprar.classList.add('backup');
        }

        if(element.classList.contains('kit-building-card')){
            popUpBackground.classList.add('building-bg');
            popUpTitle.innerHTML = 'Kit Montagem';
            popUpDesc.innerHTML = 'Quer montar mais de uma máquina? Compre nosso kit de 3 montagens para que consiga pagar um melhor preço!';
            popUpPrice.innerHTML = 'R$ 75,00';
            botaoComprar.classList.add('kit-montagem');
        }

        if(element.classList.contains('kit-formatting-card')){
            popUpBackground.classList.add('formatting-bg');
            popUpTitle.innerHTML = 'Kit Formatação';
            popUpDesc.innerHTML = 'Sente que precisa formatar sua máquina mais de 1 vez por ano? Compre nosso kit de formatação para não precisar ter dor de cabeça com sua máquina - além de ficar mais em conta ;)  !';
            popUpPrice.innerHTML = 'R$ 50,00';
            botaoComprar.classList.add('kit-formatacao');
        }

        if(element.classList.contains('kit-cleaning-card')){
            popUpBackground.classList.add('cleaning-bg');
            popUpTitle.innerHTML = 'Kit de Limpeza';
            popUpDesc.innerHTML = 'Toda vez sua máquina começa a perder desempenho e a superaquecer por conta de poeira? Não passe por sofrimento, compre nosso kit de limpeza e deixe que nós sofremos com o trabalho sujo!';
            popUpPrice.innerHTML = 'R$ 70,00';
            botaoComprar.classList.add('kit-limpeza');
        }
    }

    managePopUp();
    


}
myApplication();