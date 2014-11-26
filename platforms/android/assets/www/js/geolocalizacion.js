var posicionesG = [];
var posicionesT = [];
var idGeo=0;

function geolocalizame(imagen){
    alert("entro");
    idFoto = imagen.attr("id");
    idGeo=parseInt(idFoto.charAt(idFoto.length-1));
    alert(idGeo);
    alert(idFoto.charAt(idFoto.length-2));
    if(idFoto.charAt(idFoto.length-2)=='T'){
        alert("entro aqui T");
        navigator.geolocation.getCurrentPosition(exitoLocalizacionT, errorGeo,{timeout: 30000, enableHighAccuracy: true});
    }
    else{
        alert("entro aqui G");
        navigator.geolocation.getCurrentPosition(exitoLocalizacionG, errorGeo,{timeout: 30000, enableHighAccuracy: true});
    }
}

function exitoLocalizacionT (localizacion){
    alert("entro bien T");
      posicionesT[idGeo]=localizacion; 
    alert("salgo");
}
    
function exitoLocalizacionG (localizacion){
    alert("entrobien G");
      posicionesG[idGeo] = localizacion;  
    alert("salgo");
}
function muestrameEnMapa(guardada) {}

function errorGeo(error){
    alert("Error de localizacion: " + error.message);
}