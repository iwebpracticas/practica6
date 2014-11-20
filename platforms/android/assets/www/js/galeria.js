var numeroFotos = 0

function incrustaFoto(direccion){
    var imagen = document.createElement("IMG")
    imagen.id = "imagen" + numeroFotos
    imagen.src = direccion
    imagen.width = 50
    imagen.height = 50
    var marco = document.createElement("DIV")
    marco.className="marco"
    marco.id = "marco" + numeroFotos
    imagen.addEventListener("click",function(){ agrandaFoto(this);})
    marco.appendChild(imagen)
    
    //geolocalizame(imagen)
    var c = window.prompt("Ponga un titulo a la foto", "")
    
    if (c) {
        var comentario = document.createElement("DIV")
        comentario.innerHTML = c
        marco.appendChild(comentario)
    }

    var galeria = document.getElementById("galeria")
    galeria.appendChild(marco)
    numeroFotos++
}

function agrandaFoto(imagen){
    var grande = document.createElement("DIV")
    grande.className="grande"
    grande.appendChild(imagen)
    document.body.appendChild(grande)
    
}
