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

        // validar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback')

        if(!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = "Todos los campos son obligarios";
            document.querySelector('.modal-body form').appendChild(alerta);

            // elimina la alerta
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
    return;
}

    // asignar datos del formulario
        cliente = {...cliente, mesa, hora}

    // ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // mostrar las secciones
    mostrarSecciones();

    // obtener platillo de api de JSON
    obtenerPlatillo();
}

function mostrarSecciones() {
    const sesionesOcultas = document.querySelectorAll('.d-none')
    sesionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillo() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarPlatillos(resultado) )
        .catch( error => console.log(error));
}

function mostrarPlatillos(platillos) {
   const contenido = document.querySelector('#platillos .contenido');

   platillos.forEach( platillo => {
    const row = document.createElement('DIV');
    row.classList.add('row');

    const nombre = document.createElement('DIV');
    nombre.classList.add('col-md-4');
    nombre.textContent = platillo.nombre;

    row.appendChild(nombre);
    contenido.appendChild(row);
   } )
}