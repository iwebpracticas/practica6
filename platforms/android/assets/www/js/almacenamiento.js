var nFotosG = 0;
document.addEventListener("deviceready",dispListo,false);

function dispListo(){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, exitoFS, errorFS);
}

function errorFS(mensaje){
    alert("Fallo almacenamiento:" + mensaje);
}

function exitoFS(){
    spinnerplugin.show();
    var fotoURI = cordova.file.dataDirectory+"imagen"+nFotosG+".jpg";
    window.resolveLocalFileSystemURL(fotoURI, function(){incrustaFoto(fotoURI,true);nFotosG++;exitoFS();}, function(){spinnerplugin.hide();fotosGuardadas=nFotosG});
}