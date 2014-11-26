var posicionesG = [];
var posicionesT = [];
var idGeo=0;
var botonVolver = $('<button onclick="ocultaMapa()" id="botonVolver">Volver</button>');

function geolocalizame(imagen){
    var idFoto = imagen.attr("id");
    idGeo=parseInt(idFoto.charAt(idFoto.length-1));
    if(idFoto.charAt(idFoto.length-2)=='T'){
        if (posicionesT[idGeo]){return;}
        navigator.geolocation.getCurrentPosition(exitoLocalizacionT, errorGeo,{timeout: 30000, enableHighAccuracy: true});
    }
    else{
        if (posicionesG[idGeo]){return;}
        navigator.geolocation.getCurrentPosition(exitoLocalizacionG, errorGeo,{timeout: 30000, enableHighAccuracy: true});
    }
}

function exitoLocalizacionT (localizacion){
    alert(localizacion.coords.latitude+""+localizacion.coords.longitude)
      posicionesT[idGeo]=localizacion; 
}
    
function exitoLocalizacionG (localizacion){
    alert(localizacion.coords.latitude+""+localizacion.coords.longitude)
      posicionesG[idGeo] = localizacion;  
}

function muestrameEnMapa() {
    var idFoto = fotoActual.attr("id");
    var idFotoActual=parseInt(idFoto.charAt(idFoto.length-1));
    alert(idFoto.charAt(idFoto.length-2))
    if(idFoto.charAt(idFoto.length-2)=="T"){
        var posicionAMostrar=posicionesT[idFotoActual]
        alert(posicionAMostrar)
        var map = new GMaps({
          div: '#mapa',
          lat: posicionAMostrar.coords.latitude,
          lng: posicionAMostrar.coords.longitude,
        });
        alert("Paso 2")
        //map.addMarker({ lat: lat, lng: lng})
        alert("Paso 3")
        $("#mapa").append(botonVolver);
        alert("Paso 4")
        sacaMapa()
        alert("Paso 5")
        
        
    }
    else{
        alert("Paso 1 else")
        var posicionAMostrar=posicionesG[idFotoActual]
        alert("Paso 2 else")
        var map = new GMaps({
          div: '#mapa',
          lat: posicionAMostrar.coords.latitude,
          lng: posicionAMostrar.coords.longitude,
        });
        alert("Paso 3 else")
        //map.addMarker({ lat: lat, lng: lng})
        alert("Paso 4 else")
        $("#mapa").append(botonVolver);
        alert("Paso 5 else")
        sacaMapa()
    }
    
}

function sacaMapa(){
    $("#foto").hide();
    $("#mapa").show();
}

function ocultaMapa(){
    $("#mapa").hide();
    aparece()
}

function errorGeo(error){
    alert("Error de localizacion: " + error.message);
}