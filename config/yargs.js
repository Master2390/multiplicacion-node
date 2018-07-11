const argv = require('yargs')
    .command('listar', 'Imprimir la Tabla de Multiplicar', {
        base: {
            demand: true,
            alias: 'b',
            describe: 'La base de la tabla de multiplicar'
        },
        limite: {
            alias: 'l',
            default: 10,
            describe: 'Limite de iteraciones en la tabla de muliplicar'
        }
    })
    .command('crear', 'Imprimir la Tabla de Multiplicar', {
        base: {
            demand: true,
            alias: 'b',
            describe: 'La base de la tabla de multiplicar'
        },
        limite: {
            alias: 'l',
            default: 10,
            describe: 'Limite de iteraciones en la tabla de muliplicar'
        }
    }).help().argv;

module.exports = {
    argv
}