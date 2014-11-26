var watchID;
var flagSigno=0;
var ultimaX;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    activaWatch();
}

function dameSigno(acceleration){
    var incremento = acceleration.x - ultimaX;
    ultimaX = acceleration.x;
    
    if(incremento<-9){
        flagSigno=1;
        compruebaFoto();
    }
    
    else if (incremento>9){
        flagSigno=-1;
        compruebaFoto();
    }
}
    
function compruebaFoto() {
    var idFoto= fotoActual.attr('id');
    var numeroFoto=parseInt(idFoto.charAt(idFoto.length-1));
    
    var indice = numeroFoto+flagSigno;
    if(idFoto.charAt(idFoto.length-2)=='T'){
        for (i = indice ;((indice>=0)&&(indice<fotos.length)); i=i+flagSigno){
            if (fotos[i]){
                cambiaFoto(i, false);
                return;
            }
        }
}
    else{
        for (i = indice ;((indice>=0)&&(indice<almacenadas.length)); i=i+flagSigno){
            if (almacenadas[i]){
                cambiaFoto(i, true);
                return;
            }
        }
    }
}


function cambiaFoto(numeroFoto, guardada) {
    desaparece();
    var indiceFoto = numeroFoto;
        
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

function activaWatch(){
     watchID=navigator.accelerometer.watchAcceleration(dameSigno,onError, {frequency: 200});
}