var numeroFotos = 0;
var fotoActual = 0;
var fotos = [];

function incrustaFoto(imagen){
    var link = $('<a href="#' + numeroFotos + '"/>')
    link.click(function(){muestraFoto($(this))})
    var img = $('<img clas = "imagen" id="imagen' + numeroFotos + '"src="' + imagen +'"/>');
    fotos.push(img)
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    
    var contenedor = $('<figure class = "contenedor" id="contenedor' + numeroFotos + '"/>');
    link.append(miniatura);
    contenedor.append(link);
    
   var c = prompt("Ponga titulo a la foto","");
    
    if (c) {
        var comentario = $('<figcaption class = "comentario" id="comentario' + numeroFotos + '"/>');
        comentario.html(c);
        contenedor.append(comentario);
    }
    
    $("#marco").append(contenedor);
    
    numeroFotos++;
     
}


function muestraFoto(link){
    desaparece()
    
    if (link.attr("href")){
        alert(link.attr("href").split("#")[1])
        fotoActual = parseInt(link.attr("href").split("#")[1])
    }
    $("#foto").append(fotos[fotoActual].clone(true).addClass("imgGrande"))
    aparece()
}


function aparece(){
$("#foto").fadeIn(2000)
}

function desaparece(){
$("#foto").fadeOut(2000)
$("#foto").empty();
}
