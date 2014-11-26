var posicionesG = [];
var posicionesT = [];
var idGeo=0;

function geolocalizame(imagen){
    idFoto = imagen.attr("id");
    idGeo=parseInt(idFoto.charAt(idFoto.length-1));
    if(idFoto.charAt(idFoto.length-2)=='T'){
        if (posicionesT[idGeo]){return;}
        navigator.geolocation.getCurrentPosition(exitoLocalizacionT, errorGeo,{timeout: 10000, enableHighAccuracy: true});
    }
    else{
        if (posicionesG[idGeo]){return;}
        navigator.geolocation.getCurrentPosition(exitoLocalizacionG, errorGeo,{timeout: 10000, enableHighAccuracy: true});
    }
}

function exitoLocalizacionT (localizacion){
      posicionesT[idGeo]=localizacion; 
}
    
function exitoLocalizacionG (localizacion){
      posicionesG[idGeo] = localizacion;  
}
function muestrameEnMapa(guardada) {}

function errorGeo(error){
    alert("Error de localizacion: " + error.message);
}