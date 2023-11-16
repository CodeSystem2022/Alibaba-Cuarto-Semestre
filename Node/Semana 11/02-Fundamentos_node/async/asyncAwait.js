// la palabra asyn con es necesaria en las funciones porque ya son
// asincronas igual proyectan una sincronia habitual

async function hola(nombre) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
        console.log('Hola ' +nombre);
        resolve(nombre);
    }, 1000);
    })   
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => { //usamos la sintaxis ES6
        setTimeout( function (){
            console.log('bla bla bla bla');
            resolve(nombre);
        },1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function () {
            // validamos el error o aprobacion
            console.log('Adios ' + nombre);
            //if(err) reject('Hay un error');
            resolve();
        }, 1000);
    });
}

// await hola('Ariel');  //esto es una mala sintaxis
// await solo es valida dentro de una funcion asincrona

async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}

console.log('Empezamos el proceso...')
main();
console.log('esta va a ser la segunda instruccion')

// codigo en ingles

async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hello ' + name);
            resolve(name);
        }, 1000);
    })
}

async function talk(name) {
    return new Promise((resolve, reject) => { // Using ES6 syntax
        setTimeout(function () {
            console.log('blah blah blah blah');
            resolve(name);
        }, 1000);
    })
}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            // Validate the error or approval
            console.log('Goodbye ' + name);
            // if(err) reject('There is an error');
            resolve();
        }, 1000);
    });
}

async function main() {
    let name = await hello('Ariel');
    await talk();
    await talk();
    await talk();
    await goodbye(name);
    console.log('The process is finished...')
}

console.log('Starting the process...')
main();
console.log('This will be the second instruction');

