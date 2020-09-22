let { getUsuario } = require('./app');

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
});


console.log('Fin');