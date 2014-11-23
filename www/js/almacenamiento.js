document.addEventListener("deviceready",dispListo,false);

function dispListo(){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, exitoFS, errorFS);
}

function errorFS(mensaje){
    alert("Fallo almacenamiento:" + mensaje)
}