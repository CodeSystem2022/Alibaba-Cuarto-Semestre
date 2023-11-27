function hola(nombre, miCaLLback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCaLLback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('iniciando el proceso...');
hola('carlos', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando el proceso...');
    });
});


// hola('carlos', function () {});
// adios('carlos', function () {});