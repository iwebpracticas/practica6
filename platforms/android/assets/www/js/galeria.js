var numeroFotosT = 0;
var numeroFotosG = 0;
var fotoActual;
var fotos = [];
var almacenadas = [];
var botones = $('<div id ="botones"> <button onclick="" id="mostrarMapa">Mapa</button><button onclick="desaparece()" id ="salir">Salir</button><br></div>');
var botonGuardar = $('<button onclick="" id = "guardar">Guardar</button>');
var botonBorrar = $('<button onclick="" id = "borrar">Borrar</button>');



function incrustaFotoTemp(imagen) {
    var link = $('<a href="#' + numeroFotosT + '"/>');
    link.click(function(){muestraFoto($(this),false)});
    var img = $('<img class="imagenes" id="imagenT' + numeroFotosT + '"src="' + imagen +'"/>');
    fotos.push(img);
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    link.append(miniatura);
    
    var contenedor = $('<div class="contenedores"></div>')
    contenedor.attr("id","contenedorT"+numeroFotosT);
    
    contenedor.append(link);
    $("#marcoT").append(contenedor);
    
    numeroFotosT++;
    
    geolocalizame(img);
}

function incrustaFotoGuardada(imagen){
    var link = $('<a href="#' + numeroFotosG + '"/>');
    link.click(function(){muestraFoto($(this),true)});
    var img = $('<img class="imagen" id="imagenG' + numeroFotosG + '"src="' + imagen +'"/>');
    almacenadas.push(img);
    
    var miniatura = img.clone(true).MyThumbnail({thumbWidth:50,thumbHeight:50,backgroundColor:"#ccc",imageDivClass:"myPic"});
    link.append(miniatura);
    var contenedor = $('<div class="contenedores"' + numeroFotosG + '"></div>')
    contenedor.attr("id","contenedorG"+numeroFotosG);
    
    contenedor.append(link);
    $("#marcoG").append(contenedor);
    
    numeroFotosG++;   
    
    geolocalizame(img);
}

function muestraFoto(link,guardada) {
    desaparece();
    if (link.attr("href")){
        var indiceFoto = parseInt(link.attr("href").split("#")[1]);
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
             alert(fotoActual.attr("id"));
             $("#contenedorG"+idFotoActual).remove();
             almacenadas[idFotoActual] = undefined;
             entrada.remove();
             desaparece();
         }, onFail);
    }
    else{
        var idFotoActual = parseInt(fotoActual.attr("id").split("T")[1])
            alert("#contenedorT"+idFotoActual);
            $("#contenedorT"+idFotoActual).remove();
            fotos[idFotoActual] = undefined;
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
            incrustaFotoGuardada(fotoActual.attr("src"));
            var idFotoActual = parseInt(fotoActual.attr("id").split("T")[1])
            fotos[idFotoActual] = undefined;
            alert($("#contenedorT"+idFotoActual));
            $("#contenedorT"+idFotoActual).remove();
            alert("llegodef");
            desaparece();
        }, onFail);
    }, onFail);
    
}


