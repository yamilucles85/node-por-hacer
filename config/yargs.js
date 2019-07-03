const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', opts)
    .command('actualizar', 'Actualiza una tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}