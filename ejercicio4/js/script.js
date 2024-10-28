document.addEventListener("DOMContentLoaded",function () {
    var button = document.getElementById("loadXML");
    var contentDiv = document.getElementById("content");
    
    button.addEventListener("click",function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "archivo.xml", true);
       
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
             const xmlDoc = xhr.responseXML;
             mostrarContenidoXML(xmlDoc,contentDiv);   
            }
        }
        xhr.send(null);
    });
});

function mostrarContenidoXML(xml,contentDiv) {
    //limpar contenido anterior
    contentDiv.innerHTML = "";

    //obtener elementos del xml y mostrarlos
    var items = xml.getElementsByTagName("item");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;

        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<h2>${title}</h2><p>${description}</p>`;

        contentDiv.appendChild(itemDiv);
    }
}