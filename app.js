// Ejercicio para crear un *.txt
const { fileCreation } = require('./utils/multiplicar');
const argv = require('./config/yargs');

//console.clear();

// se usa yargs para acceder a los comando que se envían por consola y manipularlos con más facilidad
console.log(argv);

// envía la base
fileCreation(argv.base, argv.listar, argv.hasta);