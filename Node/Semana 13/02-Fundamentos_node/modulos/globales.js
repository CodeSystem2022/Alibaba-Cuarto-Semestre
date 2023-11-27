// this === global = true

//Mostrar al en consola
//console.log();

// Mostrar mensaje en forma de error
//console.error();

//Ejecutar un codigo despues de un intervalo de tiempo
//setTimeout(() => {});

//Ejecutar un codigo cada intervalo de tiempo
//setInterval(() => {});

//Da prioridad de ejecucion a una funcion asincronica
//setImmediate(() => {});

//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() =>{
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); // detenemos la funcion
    }
    i++;
},1000);

setInmediate(() =>{
    console.log('Saludo inmediato');
});
//require();

console.log(__filename);