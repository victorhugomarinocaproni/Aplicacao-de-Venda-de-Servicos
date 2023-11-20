function myApplication(){
    
    const botaoFechar = document.querySelector('.close-element');

    function voltaPaginaInicial(){
        botaoFechar.addEventListener('click', event =>{
            window.location.href = `http://127.0.0.1:5500/frontendClientes/first-screen.html`;   
        });
    }

    voltaPaginaInicial();

}


myApplication();