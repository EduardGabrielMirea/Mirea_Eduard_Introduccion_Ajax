document.addEventListener("DOMContentLoaded",function () {

    var totalSuma = document.getElementById("totalSuma");
    totalSuma.readOnly = true;
    
    var form = document.getElementById("formulario");
    
    var xhr = new XMLHttpRequest();
    var sumaPhp = 'suma.php';
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value;
        
        //El encodeURIComponent(number1), es para que no de erores cuando recoga los datos de la url.
        var parametros = `?number1=${encodeURIComponent(number1)}&number2=${encodeURIComponent(number2)}`;
    
        xhr.open("GET",sumaPhp+parametros,true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                totalSuma.value = xhr.responseText;
            }
        }
        xhr.send();
    });

});