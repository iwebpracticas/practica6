var flagSigno=0;
var ultimaX;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var watchID = navigator.accelerometer.watchAcceleration(dameSigno,onError, {frequency: 500});
}

function dameSigno(acceleration){
    var incremento = acceleration.x - ultimaX;
    ultimaX = acceleration.x;
    
    if(incremento<-9){
        flagSigno=-1;
        compruebaFoto();
    }
    
    else if (incremento>9){
        flagSigno=1;
        compruebaFoto();
    }
}
    
function compruebaFoto() {
    var idFoto= fotoActual.attr('id');
    var numeroFoto=parseInt(idFoto.charAt(idFoto.length-1));
    if(idFoto.charAt(idFoto.length-2)=='T'){
        if(fotos[numeroFoto+flagSigno]){
            cambiaFoto(numeroFoto, false)
        }
    }
    
    else{
        if(almacenadas[numeroFoto+flagSigno]){
            cambiaFoto(numeroFoto, true)
        } 
    }
}

function cambiaFoto(numeroFoto, guardada) {
     desaparece();
        var indiceFoto = numeroFoto+flagSigno;
        
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

function onError() {
    alert("Ha habido un error" + mensaje);
}