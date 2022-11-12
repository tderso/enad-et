/*
  Revoes the data stored by the page from local storage
*/
function removeData() {
    window.localStorage.removeItem();
}

/*
  The following loads the location of an image from local storage.
*/
window.onload = function() {
    var dataImage = localStorage.getItem('imgData');
    imgToShow = document.getElementById('theImage');
    imgToShow.src = dataImage;
    removeData();
}