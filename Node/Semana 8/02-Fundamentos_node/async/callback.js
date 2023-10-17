
function soyAsincrona(){
    setTimeout(function (miCallback) {
        console.log('Hola, soy una función asíncrona');
    }, 1000);
}

console.log('iniciando el proceso...');
soyAsincrona(function() {
    console.log('Terminando el proceso...');
});
