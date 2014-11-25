var incremento=0;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.accelerometer.getCurrentAcceleration(cambiaFoto, onError);
}

function cambiaFoto(acceleration) {
    if(acceleration.x<0){
        incremento=-1;
        var idFoto= fotoActual.attr('id')
        var numeroFoto=idFoto.charAt(idFoto.length-1)
        if(idFoto.charAt(idFoto.length-2)=='T'){
            if(fotos[numeroFoto]){
               muestraFoto(null, false)
            }
        }
        else{
            if(fotos[numeroFoto]){
               muestraFoto(null, true)
            } 
        }
    }
    
    else if (acceleration.x>0){
        incremento=1;
        var idFoto= fotoActual.attr('id')
        var numeroFoto=idFoto.charAt(idFoto.length-1)
        if(idFoto.charAt(idFoto.length-2)=='T'){
            if(fotos[numeroFoto]){
               muestraFoto(null, false)
            }
        }
        else{
            if(fotos[numeroFoto]){
               muestraFoto(null, true)
            } 
        }
    }
}

function onError() {
    alert("Ha habido un error" + mensaje);
}