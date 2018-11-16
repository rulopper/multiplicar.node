// const fs = require('express'); no es paquete nativo de node
// const fs = require('./fs'); archivos propios
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.blue.underline(archivo)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);


// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);