// function listaPedidos(){
//     const cartaoCliente = localStorage.getItem('cartaoId');
//     fetch(`http://localhost:3000/lista-recompensas/${cartaoCliente}`)
//         .then(response => response.json())
//         .then( (dadosRecebidos) => {

//             const codeArray = transformIntoArray(dadosRecebidos); // cria um array com as abreviacoes de recompensa
//             console.log(codeArray);

//             const codesObject = createObjectsArray(dadosRecebidos); // Lista com objetos
//             console.log(codesObject);

//             mostraPedidosNaTela(codeArray, codesObject);

//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// listaPedidos();

// function transformIntoArray(objectArray){
//     const codeArray = [];
//     for(let code of objectArray){
//         codeArray.push(code.abreviacao);
//     }
//     return codeArray;
// }

// function createObjectsArray(dados){

//     const objectArray = [];

//     for(let code of dados){

//         let obj = {
//             codRecompensa: code.cod_recompensa,
//             abreviacaoRecompensa: code.abreviacao
//         };

//         objectArray.push(obj);
//     }
//     return objectArray;

// }
















