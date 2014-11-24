var numeroFotos = 0;
var fotoActual = 0;
var fotos = [];
var almacenadas[];
var botones = $('<div id ="botones"> <button onclick="desaparece()" id = "salir">Salir</button><br></div>')
//var botonGuardar = $('<button onclick="" id = "guardar"/>')
var fotosGuardadas;


function incrustaFoto(imagen, guardada){
    var link = $('<a href="#' + numeroFotos + '"/>')
    link.click(function(){muestraFoto($(this))})
    var img = $('<img clas = "imagen" id="imagen' + numeroFotos + '"src="' + imagen +'"/>');
    fotos.push(img)
    //if(guardada){almacenadas.push(guardada)}else{almacenadas.push(false)};
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    
    var contenedor = $('<figure class = "contenedor" id="contenedor' + numeroFotos + '"/>');
    link.append(miniatura);
    
    $("#marco").append(link);
    
    numeroFotos++;   
}


function muestraFoto(link){
    desaparece()
    
    if (link.attr("href")){
        fotoActual = parseInt(link.attr("href").split("#")[1])
    }
    $("#foto").append(fotos[fotoActual].clone(true).addClass("imgGrande"))
    //if(almacenadas[fotoActual]){}
    $("#foto").append(botones)
    aparece()
}


function aparece(){
$("#foto").show();
}

function desaparece(){
$("#foto").hide();
$("#foto").empty();
}

function guardaFoto(){
    imagenURI = fotos[fotoActual].attr('src')
    window.resolveLocalFileSystemURI(imagenURI, mueveImagen, onFail);
}

function mueveImagen(imagen){
    window.resolveLocalFileSystemURI(cordova.file.dataDirectory, function(dest){
        var nombre = "imagen"+fotosGuardadas+".jpg";
        alert(nombre);
        imagen.copyTo(dest, nombre, function(){fotosGuardadas++;}, onFail);
        }, onFail);
    
}


