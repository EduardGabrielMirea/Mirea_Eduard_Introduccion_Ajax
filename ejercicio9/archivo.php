<?php
    // Simular un retraso de 3 segundos en la respuesta. Puedes hacerlo en php o en js.
    sleep(3);

    // Verificar si los parametros existen y son string.
    if (isset($_GET['nombre']) && is_string($_GET['nombre']) && isset($_GET['apellido']) && is_string($_GET['apellido'])) {
        # code...
        $nombre = $_GET['nombre'];
        $apellido = $_GET['apellido'];
        $nombreCompleto = $nombre . " - " . $apellido;
        
        // El archivo.php devuelve un string con el nombre completo.
        echo $nombreCompleto;
    }else{
        echo "Por favor, los datos deben ser solo texto";
    }
?>