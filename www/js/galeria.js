var numeroFotosT = 0;
var numeroFotosG = 0;
var fotoActual;
var fotos = [];
var almacenadas = [];
var botones = $('<div id ="botones"> <button onclick="desaparece()" id = "salir">Salir</button><br></div>');
var botonGuardar = $('<button onclick="" id = "guardar">Guardar</button>');
var botonBorrar = $('<button onclick="" id = "borrar">Borrar</button>');



function incrustaFotoTemp(imagen) {
    var link = $('<a href="#' + numeroFotosT + '"/>');
    link.click(function(){muestraFoto($(this),false)});
    var img = $('<img clas = "imagen" id="imagenT' + numeroFotosT + '"src="' + imagen +'"/>');
    fotos.push(img);
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    alert(miniatura.attr("id"));
    link.append(miniatura);
    
    $("#marcoT").append(link);
    
    numeroFotosT++;   
}

function incrustaFotoGuardada(imagen){
    var link = $('<a href="#' + numeroFotosG + '"/>');
    link.click(function(){muestraFoto($(this),true)});
    var img = $('<img clas = "imagen" id="imagenG' + numeroFotosG + '"src="' + imagen +'"/>');
    almacenadas.push(img);
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    

    link.append(miniatura);
    
    $("#marcoG").append(link);
    
    numeroFotosG++;   
}

function muestraFoto(link,guardada) {
    desaparece();
    if (link.attr("href")){
        var indiceFoto = parseInt(link.attr("href").split("#")[1]);
    }
    
    else{
        var indiceFoto = parseInt(fotoActual.attr('id').charAt(idFoto.length-1))+incremento;
    }
        
    
    if(guardada){
        fotoActual = almacenadas[indiceFoto]
        botonBorrar.attr("onclick", "borraFoto(true)");
        botonGuardar.attr("onclick", "guardaFoto(true)");
        botones.append(botonGuardar);
        botones.append(botonBorrar);
    }
    else{
        fotoActual = fotos[indiceFoto]
        botonBorrar.attr("onclick", "borraFoto(false)");
        botonGuardar.attr("onclick", "guardaFoto(false)");
        botones.append(botonGuardar);
        botones.append(botonBorrar);
    }
    
    $("#foto").append(fotoActual.clone(true).addClass("imgGrande"))
    
    $("#foto").append(botones);
    aparece();
}


function aparece(){
$("#foto").show();
}

function desaparece(){
$("#foto").hide();
$("#foto").empty();
}

function borraFoto(guardada){
    if(guardada){
         window.resolveLocalFileSystemURI(fotoActual.attr("src"), function(entrada){
             var idFotoActual = parseInt(fotoActual.attr("id").split("G")[1])
             almacenadas[idFotoActual] = null;
             entrada.remove();
              //$("#marcoT").empty();
             desaparece();
         }, onFail);
    }
    else{
        var idFotoActual = parseInt(fotoActual.attr("id").split("T")[1])
            fotos[idFotoActual] = null;
            //$("#marcoT").empty();
            desaparece();
    }
}

function guardaFoto(guardada){ 
    if (!guardada){
    imagenURI = fotoActual.attr('src')
    window.resolveLocalFileSystemURI(imagenURI, mueveImagen, onFail);
    }
    else{alert("Ya esta guardada")}
}

function mueveImagen(imagen){
    window.resolveLocalFileSystemURI(cordova.file.dataDirectory, function(dest){
        var nombre = "imagen"+numeroFotosG+".jpg";
        imagen.copyTo(dest, nombre, function(){
            almacenadas.push(fotoActual);
            incrustaFotoGuardada(fotoActual.attr("src"));
            var idFotoActual = parseInt(fotoActual.attr("id").split("T")[1])
            fotos[idFotoActual] = null;
            alert("#imagenT" + idFotoActual);
            //$("#marcoT").empty();
            desaparece();
        }, onFail);
    }, onFail);
    
}


