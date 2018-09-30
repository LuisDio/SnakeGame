
// create a canvas when window is loaded/open
window.onload = function() {

    // Create a canvas element with given property
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    // Add this canvas element to our html body tag
    document.body.appendChild(canvas);

    // create an object within the canvas
    var rectObject = canvas.getContext('2d');
    rectObject.fillStyle = "#ff0000";
    rectObject.fillRect(30, 30, 100, 50);
}