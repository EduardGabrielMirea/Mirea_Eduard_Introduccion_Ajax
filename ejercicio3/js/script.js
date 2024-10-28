document.addEventListener("DOMContentLoaded",function () {
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

    
})