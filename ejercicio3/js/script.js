document.addEventListener("DOMContentLoaded",function () {
    var xhr = false;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    const imagenes = ["img/baixa.jpeg","img/baixa (1).jpeg"];
    let indiceImagen = 0;
    var cambiar =  document.getElementById("change");

    cambiar.addEventListener("click", function () {
        // Alternar el índice de la imagen
        indiceImagen = (indiceImagen + 1) % imagenes.length;
        
        if (xhr) {
            var contenedor = document.getElementById("content");
            xhr.open("GET", imagenes[indiceImagen], true); // true para asíncrono
            xhr.responseType = "blob"; //Para repensentar archivos de imagen en js

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var imgURL = URL.createObjectURL(xhr.response);
                    document.getElementById("imagen").src = imgURL;

                    document.getElementById("imagen").onload = function () {
                        URL.revokeObjectURL(imgURL);
                    }
                }
            };
            xhr.send(null);
        }
    });

})