var posicionesG = [];
var posicionesT = [];
var idGeo=0;
var botonVolver = $('<button onclick="ocultaMapa()" id="botonVolver">Volver</button>');
var posicionFotoActual;

function geolocalizame(imagen){
    var idFoto = imagen.attr("id");
    idGeo=parseInt(idFoto.charAt(idFoto.length-1));
    if(idFoto.charAt(idFoto.length-2)=='T'){
        if (posicionesT[idGeo]){return;}
 navigator.geolocation.getCurrentPosition(exitoLocalizacionT, errorGeo,{timeout: 30000, enableHighAccuracy: true});
    }
}


function exitoLocalizacionT (localizacion){
      posicionesT[idGeo]=localizacion; 
}


function exitoLocalizacionG (localizacion){
      posicionesG[idGeo] = localizacion;  
}

function muestrameEnMapa() {
    var idFoto = fotoActual.attr("id");
    var idFotoActual=parseInt(idFoto.charAt(idFoto.length-1));
    
    if(idFoto.charAt(idFoto.length-2)=="T"){
        posicionFotoActual=posicionesT[idFotoActual]
        if(!posicionFotoActual){
            alert("Esta foto no esta localizada");
            return;
        }
        var mapDiv = document.getElementById("mapa");
        var map = plugin.google.maps.Map.getMap(mapDiv);
        map.on(plugin.google.maps.event.MAP_READY, mapaListo);
        $("#mapa").append(botonVolver);
        sacaMapa()
    }
    
    else{
        posicionFotoActual=posicionesG[idFotoActual]
        if(!posicionFotoActual){
            alert("Esta foto no esta localizada");
            return;
        }
        var mapDiv = document.getElementById("mapa");
        var map = plugin.google.maps.Map.getMap(mapDiv);
        map.on(plugin.google.maps.event.MAP_READY, mapaListo);
        $("#mapa").append(botonVolver);
        sacaMapa()
    }
    
}

function mapaListo(map){
    var latLng = new plugin.google.maps.LatLng(posicionFotoActual.coords.latitude,posicionFotoActual.coords.longitude);
    map.addMarker({
  'position':latLng,
  'title': "Foto sacada aquí"
    });
    map.animateCamera({
      'target': latLng,
      'tilt': 60,
      'zoom': 18,
      'bearing': 140,
      'duration': 10000
    });
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