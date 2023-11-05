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
        botaoComprar.classList.remove('building');
        botaoComprar.classList.remove('formatting');
        botaoComprar.classList.remove('cleaning');
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
            popUpDesc.innerHTML = 'Realizamos a formatação completa do seu computador!'
            popUpPrice.innerHTML = 'R$ 30,00';
            botaoComprar.classList.add('formatting');
        }

        if(element.classList.contains('cleaning-card')){
            popUpBackground.classList.add('cleaning-bg');
            popUpTitle.innerHTML = 'Limpeza';
            popUpDesc.innerHTML = 'Realizamos a limpeza completa do seu computador!'
            popUpPrice.innerHTML = 'R$ 15,00';
            botaoComprar.classList.add('cleaning');
        }
    }

    managePopUp();
    


}
myApplication();