var numeroFotos = 0

function incrustaFoto(direccion){
    
    var imagen = document.createElement('img')
    imagen.id = "imagen" + numeroFotos
    imagen.src = direccion
    var marco = document.createElement('figure')
    marco.id = "marco" + numeroFotos
    marco.appendChild(imagen)
    
    var c = window.prompt("Comenta la foto")
    
    if c {
        var comentario = document.createElement('figcaption')
        marco.appendChild(comentario)
    }

    var galeria = document.getElementById('galeria')
    galeria.appendChild(imagen)
}
    