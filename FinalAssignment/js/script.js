
//var elements for each of the 3 items
var jersey = document.getElementById("jersey");
var puck = document.getElementById("puck");
var stick = document.getElementById("stick");

// three functions for each item if clicked.
jersey.onclick = function() {
    document.getElementById("main").src = "images/jersey.png";
    document.getElementById("imgname").innerHTML = "2022 Retro Jersey $159.99 CAD";
}
puck.onclick = function() {
    document.getElementById("main").src = "images/puck.png";
    document.getElementById("imgname").innerHTML = "Official Licensed EDM Puck $20.99 CAD";
}
stick.onclick = function() {
    document.getElementById("main").src = "images/stick.png";
    document.getElementById("imgname").innerHTML = "CCM Jetspeed 2023 $329.99 CAD";
}