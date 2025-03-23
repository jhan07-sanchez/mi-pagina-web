document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form'); // Selecciona el formulario correctamente
    const nombreInput = document.getElementById('nombre');
    const motivoInput = document.getElementById('motivo');
    const correoInput = document.getElementById('correo'); // Corregí la variable

    // Función para validar el campo de nombre
    function validarNombre() {
        const nombre = nombreInput.value.trim();
        if (nombre.length < 3) {
            mostrarError(nombreInput, 'El nombre debe contener al menos 3 caracteres');
            return false;
        } else {
            limpiarError(nombreInput);
            return true;
        }
    }

    // Función para validar el campo de motivo de contacto
    function validarMotivo() {
        const motivo = motivoInput.value.trim(); // Corregí el error de trim0
        if (motivo === '') {
            mostrarError(motivoInput, 'Debe ingresar un motivo de contacto');
            return false;
        } else {
            limpiarError(motivoInput);
            return true;
        }
    }

    // Función para validar el correo electrónico
    function validarCorreo() {
        const correo = correoInput.value.trim();
        const expresion = /^\w+@\w+\.[a-z]{2,}$/;
        if (!expresion.test(correo)) {
            mostrarError(correoInput, 'Debe ingresar un correo electrónico válido');
            return false;
        } else {
            limpiarError(correoInput);
            return true;
        }
    }

    // Función para mostrar un mensaje de error
    function mostrarError(input, mensaje) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error')) {
            error = document.createElement('span');
            error.classList.add('error');
            input.parentNode.insertBefore(error, input.nextElementSibling);
        }
        error.textContent = mensaje;
        input.style.border = '2px solid red';
    }

    // Función para limpiar errores
    function limpiarError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.remove();
        }
        input.style.border = '2px solid #90caf9';
    }

    // Evento para validar en tiempo real
    nombreInput.addEventListener('input', validarNombre);
    motivoInput.addEventListener('input', validarMotivo);
    correoInput.addEventListener('input', validarCorreo);

    // Evento de envío del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const esNombreValido = validarNombre();
        const esMotivoValido = validarMotivo();
        const esCorreoValido = validarCorreo();

        if (esNombreValido && esMotivoValido && esCorreoValido) {
            alert('Formulario enviado con éxito! 🎉');
            formulario.reset(); // Resetea el formulario una vez
        }
    });
});
