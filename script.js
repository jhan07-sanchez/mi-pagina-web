document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('#form');
    const nombreinput = document.getElementById('nombre');
    const motivoinput = document.getElementById('motivo');
    const corrreoinput = document.getElementById('corrreo');

    //Funcion para validar el campo de nombre
    function validarNombre() {
        const nombre = nombreinput.value.trim0;
        if (nombre.length < 3) {
            mostrarError(nombreinput,'El nombre debe contener al menos 3 caracteres');
            return false;

        }else{
            limpiarError(nombreinput);
            return true;
        }
    }

    //Funcion para validar el campo de motivo de contacto
    function validarMotivo() {
        const motivo = motivoinput.value.trim0;
        if (motivo === '') {
            mostrarError(motivoinput,'Debe ingresar un motivo de contacto');
            return false;

        }else{
            limpiarError(motivoinput);
            return true;
        }
    }

     //Funcion para validar el correo electronico
    function validarCorreo() {
        const correo = corrreoinput.value.trim();
        const expresion = /\w+@\w+\.[a-z]{2,}$/;
        if (!expresion.test(correo)) {
            mostrarError(corrreoinput,'Debe ingresar un correo electronico valido');
            return false;
        }else{
            limpiarError(corrreoinput);
            return true;
        }
    }
    
    //Funcion para mostrar un mensaje de error
    function mostrarError(input, mensaje) {
        let error = input.nextElementSibling;
        if (!error||!error.classList.contains('error')) {
            error = document.createElement('span');
            error.classList.add('error');
            input.parentNode.insertBefore(error, input.nextElementSibling);
        }
        error.textContent = mensaje;
        input.style.border = '2px solid red';
    }

    //Funcion para limpiar errores
    function limpiarError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.remove();
        }
        input.style.border = '2px solid #90caf9';
    }

    //Evento para validar en tiempo real
    nombreinput.addEventListener('input', validarNombre);
    motivoinput.addEventListener('input', validarMotivo);
    corrreoinput.addEventListener('input', validarCorreo);


    //Evento de envio de formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const esNombreValido = validarNombre();
        const esMotivoValido = validarMotivo(); 
        const esCorreoValido = validarCorreo();


        if (esNombreValido && esMotivoValido && esCorreoValido) {
            formulario.reset();
            alert("Formulario enviado con exito! 🎉");
            formulario.reset();
        }
    });
});
