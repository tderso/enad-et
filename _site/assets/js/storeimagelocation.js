
  function storeImageLocation(id) {
    // Stores the location of the image
    imageOnPage = document.getElementById(id);
    imageLocation = imageOnPage.src;
    if (imageLocation.includes('small') || imageLocation.includes('tiny')) {
      imageLocation = actualLocation(imageLocation);
    }
    //localStorage.setItem("imgData", imageLocation);
    sessionStorage.setItem("imgData", imageLocation);
    retrieveImageLocation();
  }
 
  function retrieveImageLocation() {
    //var dataImage = localStorage.getItem('imgData');
    var dataImage = sessionStorage.getItem('imgData');
    var img = document.getElementById('dispImage');        //Location where the image will go
    //img.src = dataImage;
    console.log(dataImage);
  }

  function actualLocation(imgLoc) {
      var arr = imgLoc.split('.');
      var ext = arr[1];              //Extention
      var strBeforeExt;
      var actualLoc;
      if (arr[0].includes('small')) {
        strBeforeExt = arr[0].substring(0, arr[0].length - 6);
        actualLoc = strBeforeExt + "." + ext;
      }
      if (arr[0].includes('tiny')) {
        strBeforeExt = arr[0].substring(0, arr[0].length - 5);
        actualLoc = strBeforeExt + "-small" + "." + ext;
      }
      return actualLoc; 
  }