document.addEventListener("DOMContentLoaded", function () {
    // Inicialización del objeto XMLHttpRequest
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // Función para cargar contenido de forma asíncrona
    function cargarContenido(url, idDiv) {
        if (XMLHttpRequestObject) {
            var contenedor = document.getElementById(idDiv);
            XMLHttpRequestObject.open("GET", url, true); // true para asíncrono
            XMLHttpRequestObject.onreadystatechange = function () {
                if (XMLHttpRequestObject.readyState === 4 &&
                    XMLHttpRequestObject.status === 200) {
                    contenedor.innerHTML = XMLHttpRequestObject.responseText;
                }
            };
            XMLHttpRequestObject.send(null);
        }
    }

    // Enlazar eventos de clic a los enlaces
    document.getElementById("link-inicio").addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace navegue normalmente
        cargarContenido("inicio.html", "contenido"); // Cargar contenido de inicio.html
    });

    document.getElementById("link-google").addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace navegue normalmente
        cargarContenido("google.html", "contenido"); // Cargar contenido de contacto.html
    });
});