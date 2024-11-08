// Este evento se dispara cuando el documento HTML ha terminado de cargarse completamente.
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón con id "loadPhp" y lo almacena en la variable loadPhp
    var loadPhp = document.getElementById("loadPhp");
    
    // Agrega un evento "click" al botón, de modo que cuando se haga clic en él, se ejecute una función
    loadPhp.addEventListener("click", function () {
         // Crea un nuevo objeto XMLHttpRequest para hacer una solicitud HTTP
         const xhr = new XMLHttpRequest();
         
         // Establece el archivo que se va a solicitar al servidor, en este caso "fecha.php"
         var file = 'fecha.php';
         
         // Configura la solicitud para ser una solicitud GET asíncrona
         xhr.open("GET", file, true);
         
         // Esta función se ejecutará cada vez que el estado de la solicitud cambie
         xhr.onreadystatechange = function () {
             // Verifica si la solicitud está completa (readyState === 4) y fue exitosa (status === 200)
             if (xhr.readyState === 4 && xhr.status === 200) {
                 // Inserta la respuesta del servidor (es decir, la fecha generada por fecha.php) en el elemento con id "fecha"
                 document.getElementById("fecha").innerHTML = xhr.responseText;
             }
         };
         
         // Envía la solicitud al servidor
         xhr.send();
     });
 });
 