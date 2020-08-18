const colors = require('colors');
const argumentos = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argumentos._[0];

switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite)
        break;
    case 'crear':
        console.log('Crear');

        crearArchivo(argumentos.base, argumentos.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.red}.`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
};