let { getUsuarioSync } = require('./app')

let startTime = new Date().getTime();

console.log('Inicia');

let usuario = getUsuarioSync(1);
console.log(usuario);

let usuario1 = getUsuarioSync(2);
console.log(usuario1);

let usuario2 = getUsuarioSync(3);
console.log(usuario2);

let usuario3 = getUsuarioSync(4);
console.log(usuario3);

let usuario4 = getUsuarioSync(5);
console.log(usuario4);

console.log('Fin');

let finishedTime = new Date().getTime();
let elapsedTime =(finishedTime - startTime)/1000;
console.log('Tiempo total de ejecucion: ' + elapsedTime + ' segundos.');