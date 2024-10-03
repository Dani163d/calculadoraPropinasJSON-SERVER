let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuarcarCliente = document.querySelector('#guardar-cliente');
btnGuarcarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );

    if(camposVacios) {
        console.log('Si hay al menos un campo vacio');
    } else {
        console.log('Todos los campos estan llenos')
    }
}