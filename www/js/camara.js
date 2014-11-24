    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    function capturePhotoWithFile() {
      navigator.camera.getPicture(incrustaFotoTemp, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        correctOrientation: true,
        targetWidth: 800,
        targetHeight: 800
        });
    }
    
    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(incrustaFotoTemp, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert("Fallo por: " + message);
    }
