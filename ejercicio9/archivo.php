<?php
sleep(3);

if (isset($_GET['nombre']) && is_string($_GET['nombre']) && isset($_GET['apellido']) && is_string($_GET['apellido'])) {
    $nombre = $_GET['nombre'];
    $apellido = $_GET['apellido'];
    $nombreCompleto = $nombre . " - " . $apellido;
    echo $nombreCompleto;
} else {
    echo "Por favor, los datos deben ser solo texto";
}
?>