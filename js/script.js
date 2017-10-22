var canvas = document.getElementById("canvas");
var clearAll = document.getElementById("clearAll");
var colourPicker = document.getElementById("colourPicker");
var toolBar = document.getElementsByClassName("toolbar");
var brush = document.getElementById("brush");
var pencil = document.getElementById("pencil");
var eraser = document.getElementById("eraser");


var colour = colourPicker.value;
ctx = canvas.getContext('2d');
var mousedown = 0; // yes or no
var tool = 0;

canvas.onmousedown = function (event) {
    mousedown = 1; // flag = if the mouse is pressed, we add 1, so it's yes
};
canvas.onmouseup = function () {
    mousedown = 0; // so it's no
};
canvas.onmousemove = function (event) {
   if(mousedown === 1) {
       ctx.beginPath();
       ctx.arc(event.offsetX, event.offsetY, tool, 0, 360);
       ctx.fillStyle = colour;
       ctx.fill();
   }

};

// add colour and change it
colourPicker.addEventListener("change", function () {
     colour = this.value;
});


// add toolbar and its settings
for(var i = 0; i<toolBar.length; i++){
    var _this = toolBar[i];
    _this.onclick = function () {
        if(this === brush){
            tool = 5;
            colour = colourPicker.value;
            canvas.style.cursor = "url(img/brush.png), pointer";
        }
        if(this === pencil){
            tool = 2;
            colour = colourPicker.value;
            canvas.style.cursor = "url(img/pencil.png), pointer";
        }
        if(this === eraser){
            tool = 10;
            colour = "white";
            canvas.style.cursor = "url(img/eraser.png), pointer";
        }
        console.log(this);
    };
}

// add button to clear canvas
clearAll.onclick = function () {
    ctx.clearRect(0, 0, 500, 500);
};