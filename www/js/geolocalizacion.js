var posicionesG = [];
var posicionesT = [];
var idGeo=0;

function geolocalizame(imagen){
    idGeo=parseInt(imagen.attr('id').charAt(idFoto.length-1))
    
    if(fotoActual.attr('id').charAt(idFoto.length-2)=='T'){
        navigator.geolocation.getCurrentPosition(exitoLocalizacionT, onError,{maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
    }
    
    else{
        navigator.geolocation.getCurrentPosition(exitoLocalizacionG, onError,{maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
    }
}

function exitoLocalizacionT (localizacion){
      posicionesT[idGeo]=localizacion;  
}
    
function exitoLocalizacionG (localizacion){
      posicionesG[idGeo]=localizacion;  
}
function muestrameEnMapa(guardada) {}