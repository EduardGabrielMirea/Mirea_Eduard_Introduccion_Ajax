<?php
    // Verifica que los parámetros existen y son números
    if (isset($_GET['number1']) && is_numeric($_GET['number1']) && isset($_GET['number2']) && is_numeric($_GET['number2'])) {
        $number1 = $_GET['number1'];
        $number2 = $_GET['number2'];
         
        $totalSuma = $number1 + $number2;
        //Tienes que asegurarte de que el php te devuelva con el echo.
        echo $totalSuma;
    } else {
        echo "Por favor, proporciona dos números válidos en los parámetros 'number1' y 'number2'.";
    }
?>