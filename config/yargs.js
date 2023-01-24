/***** YARGS *****/
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { number } = require('yargs');
const argv = yargs(hideBin(process.argv))
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Número de iteraciones'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'La base debe ser un número';
        return true;
    })
    .argv;

module.exports = argv;