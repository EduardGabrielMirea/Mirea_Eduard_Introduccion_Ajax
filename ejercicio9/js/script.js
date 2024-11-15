document.addEventListener("DOMContentLoaded",function () {
    var nombreCompleto = document.getElementById("nombreCompleto"); 
    nombreCompleto.readOnly = true;

    var carga = document.getElementById("carga"); //Elemnto del icono de carga
    
    var formulario = document.getElementById("formulario");
    
    var xhr = new XMLHttpRequest();
    var archivoPhp = 'archivo.php';

    formulario.addEventListener("submit",function (event) {
        event.preventDefault();
        
        // Obtener los datos del formulario
        var nombre = document.getElementById("nombre").value.trim();
        var apellido = document.getElementById("apellido").value.trim();

        // Llamar a la funcion de verificación
        if (!verificarCampos(nombre, apellido)) {
            return; // Si la validación falla, detener el envío
        }

        // Mostrar el icono de carga
        carga.style.display = "block";

        
        // Parametros de la url.
        var parametro = `?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}`;

        xhr.open("GET",archivoPhp + parametro,true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4){
                setTimeout(() => {
                    if(xhr.status === 200) {
                        nombreCompleto.value = xhr.responseText.trim();
                        //nombreCompleto.value = xhr.responseText;
                    }else{
                        nombreCompleto.value = "Error en la solicitud";
                    }
                
                    // Ocultar el icono de carga cuando la respuesta está lista
                    carga.style.display = "none";
                    
                }, 3000);// Simular un retaso de 3 segundos. Puedes hacerlo en js o en php.
            }
        };
        xhr.send();
    });
});

// Funcion para verificar si los campos están vacios
function verificarCampos(nombre,apellido) {
       
        if (nombre === "") {
            alert("El campo 'Nombre' es obligatorio.");
            return false; // Detener el envío si el campo está vacío
        }

        if (apellido === "") {
            alert("El campo 'Apellido' es obligatorio.");
            return false; // Detener el envío si el campo está vacío
        }
        return true; // Si los campos no están vacíos, enviar el formulario
}