const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);
// let argv = process.argv;
// let base = argv[2].split('=')[1];

for (let i = 0; i < argv._.length; i++) {
    const element = argv._[i];
    switch (element) {
        case 'listar':
            listarTabla(argv.base, argv.limite);
            break;
        case 'crear':
            crearArchivo(argv.base, argv.limite).then(archivo => {
                console.log(`Archivo creado: `, colors.cyan(archivo));
            }).catch((err) => {
                console.log(err);
            });
            break;
        default:
            console.log('Comando no Admitido');
            break;
    }
}