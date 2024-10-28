document.addEventListener("DOMContentLoaded",function () {
    var button = document.getElementById("loadJS");
    var contentDiv = document.getElementById("content");

    button.addEventListener("click",function () {
       const xhr = new XMLHttpRequest();
       const file = 'js/archivo.js';
       xhr.open("GET", file, true);
       xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsDoc = xhr.responseText;
            eval(jsDoc); //eval() convierte una cadena en código ejecutable, permitiendo ejecutar instrucciones, definir variables, y llamar a funciones a partir del contenido de esa cadena.
            }
        }
        xhr.send(null);
    });
    
});
