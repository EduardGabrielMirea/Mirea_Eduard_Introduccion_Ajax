document.addEventListener("DOMContentLoaded", function () {
    var contenedor = document.getElementById("contenedor");
    var loadJson = document.getElementById("loadJson");

    var xhr = new XMLHttpRequest();
    const fileJson = 'archivo.json';

    loadJson.addEventListener("click", function (event) {
        event.preventDefault();
        xhr.open('GET', fileJson, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                mostrarJson(data, contenedor);
            }
        };
        xhr.send();
    });
});

function mostrarJson(data, contenedor) {
    // Limpiamos contenido anterior del contenedor
    contenedor.innerHTML = "";

    // Obtener y mostrar los elementos del JSON
    var marcadores = data.marcadores;

    // Acumular contenido
    var contenidoHtml = "";

    // Recorremos los elementos de los marcadores
    for (let index = 0; index < marcadores.length; index++) {
        var marcador = marcadores[index];
        
        // Accedemos a las propiedades del marcador
        var city = marcador.city;
        var description = marcador.description;

        // Acumulamos contenido HTML
        contenidoHtml += `
            <p><strong>Ciudad:</strong> ${city}</p>
            <p><strong>Descripción:</strong> ${description}</p>
            <br>
        `;
    }

    // Insertamos el contenido acumulado en el contenedor
    contenedor.innerHTML = contenidoHtml;
}