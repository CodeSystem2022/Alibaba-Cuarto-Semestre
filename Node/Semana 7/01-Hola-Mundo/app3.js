console.log('Inicio del programa');//1
setTimeout(() => {
console.log('Primer TimeOut');//5
}, 3000);

setTimeout(() => {
    console.log('Segundo TimeOut');//3
}, 0);

setTimeout(() => {
    console.log('Tercero TimeOut');//4
}, 0);

console.log('Fin del programa');//2
