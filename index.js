// console.log("Hola mundo, estoy en la clase de node")

//  Crear un script que sume dos números y muestre el resultado en la terminal.

// const suma = (a, b) => a + b;

// var numUno = 20
// var numDos = 6

// console.log(`la suma de ${numUno} y ${numDos} es:`, suma(numUno, numDos))

// function sumar (a,b){
//     var resultado = a + b
//     return resultado
//     }

// console.log(sumar(3,5))



// Obtener la fecha y hora actual
// const fechaActual = new Date();
// console.log('Fecha y hora actual: ', fechaActual);

// Escribir el texto en el archivo mensaje.txt
// const fs = require('fs')

// fs.writeFile('mensaje.txt', 'Este es mi primer archivo en Node.js',
// (err) => {
//     if(err) throw err;
//     console.log("archivo creado y texto escrito")
// });

// const fs = require('fs')

// fs.readFile('mensaje.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log("El contenido del archivo es: ", data)
// })


///////////////////////////////////////////////
// Ejercicios individuales:

// Ejercicio 1: Saludo Personalizado
// Consigna: Crear un script que muestre un saludo personalizado en la terminal.
// Respuesta:
let nombre = "Carlos"
console.log(`Hola ${nombre}!!!`)

// Ejercicio 2: Crear un script de multiplicación
// Consigna: Crear un script que multiplique dos números y muestre el resultado en la terminal.
// Respuesta:
const multiplicar = (a, b) => a * b;
let numUno = 10
let numDos = 20
let resultado = multiplicar(numUno, numDos)
console.log(resultado)


// Ejercicio 3: Crear un archivo y escribir un mensaje
// Consigna: Crear un archivo llamado notas.txt y escribir un mensaje en él. (el mensaje tiene que ser sobre 3 diferencias entre back y front)
// Respuesta:
const fs = require ('fs')

fs.writeFile('diferencias.txt', 'Visibilidad El front-end es la parte visible de un sitio web o aplicación, mientras que el back-end es la parte que no se puede ver. Interacción El front-end es lo que los usuarios ven e interactúan, mientras que el back-end es la infraestructura que permite que la aplicación funcione. Lenguajes Los lenguajes utilizados para el front-end son HTML, CSS, JavaScript, mientras que los utilizados para el back-end incluyen Java, Ruby, Python, .Net. AUTOR: Carlos' ,
    (err) => {
        if (err) throw err;
        console.log('Archivo creado con exito')
    }
)


// Ejercicio 4: Mostrar un arreglo de colores
// Consigna: Crear un array con nombres de colores y mostrarlos en la consola. (mediante un bucle como el for)
// Respuesta:
const colores = ['rojo', 'verde', 'azul', 'negro']

for (let color of colores){
    console.log(color)
}


// Ejercicio 5: Mostrar el contenido de un archivo
// Consigna: Leer el contenido del archivo notas.txt y mostrarlo en la consola.
// Respuesta:

fs.readFile('diferencias.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
})