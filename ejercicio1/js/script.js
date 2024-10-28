document.addEventListener("DOMContentLoaded",function () {

    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var mostrar = document.getElementById("mostrar");

    mostrar.addEventListener("click",function () {
        var datos = 'datos.txt';
        var idDiv = 'contenedor';

        if (XMLHttpRequestObject) {
            var objeto = document.getElementById(idDiv);
            XMLHttpRequestObject.open("GET", datos, true);
            XMLHttpRequestObject.onreadystatechange = function () {
                if (XMLHttpRequestObject.readyState == 4 &&
                    XMLHttpRequestObject.status == 200) {
                    objeto.innerHTML = XMLHttpRequestObject.responseText;
                }
    
            }
            XMLHttpRequestObject.send(null);
        }
    })
    
})