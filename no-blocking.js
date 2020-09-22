let { getUsuario } = require('./app');

let startTime = new Date().getTime();

console.log('Inicia');

getUsuario(1, function(usuario){
    console.log(usuario)
});

getUsuario(2, function(usuario){
    console.log(usuario)
});

getUsuario(3, function(usuario){
    console.log(usuario)
});

getUsuario(4, function(usuario){
    console.log(usuario)
});

getUsuario(5, function(usuario){
    console.log(usuario)

    let finishedTime = new Date().getTime();
let elapsedTime =(finishedTime - startTime)/1000;
console.log('Tiempo total de ejecucion: ' + elapsedTime + ' segundos.');
});


console.log('Fin');

