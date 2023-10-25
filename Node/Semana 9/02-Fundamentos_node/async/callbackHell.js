function hola(nombre, miCaLLback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCaLLback(nombre);
    }, 1000);
}

function hablar(caLLbackHablar) {
    setTimeout( function (){
        console.log('bla bla bla bla');
        caLLbackHablar();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1500);
}
// Función recursiva
function conversacion(nombre, veces, callback){
    if (veces > 0) {
        hablar( function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        callback(nombre, callback);
    }
    
}
//--Proceso Principal
console.log('iniciando el proceso...');
hola('Ariel', function (nombre){
    conversacion(nombre, 4, function (){
        console.log('Terminando el proceso...');
    });
});
//hola('carlos', function (nombre) {
//    hablar(function() {
//        hablar(function() {
//            hablar(function() {
//                hablar(function() {
//                    adios(nombre, function(){
//                        console.log('Terminando el proceso...');
//                    });
//                });    
//            });
//        });
//    });
//});
