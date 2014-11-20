var numeroFotos = 0

function incrustaFoto(direccion){
    
    var imagen = document.createElement("IMG")
    imagen.id = "imagen" + numeroFotos
    imagen.src = direccion
    imagen.width = 500
    imagen.height = 500
    var marco = document.createElement("DIV")
    marco.id = "marco" + numeroFotos
    marco.appendChild(imagen)
    
    var c = window.prompt("Comenta la foto", "")
    
    if (c) {
        var comentario = document.createElement("DIV")
        comentario.innerHTML = c
        marco.appendChild(comentario)
    }

    var galeria = document.getElementById("galeria")
    galeria.appendChild(imagen)
    numeroFotos++
}
    