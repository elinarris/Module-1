
var square = document.getElementsByClassName("square")[0];
function hoverBlue() {console.log(square.style.backgroundColor = "blue")}
function mouseDownRed() {console.log(square.style.backgroundColor = "red")}
function mouseUpYellow() {console.log(square.style.backgroundColor = "yellow")}
function doubleClickGreen () {console.log(square.style.backgroundColor = "green")}
function scrollOrange() {console.log(square.style.backgroundColor = "orange")}


square.addEventListener("mouseover", function() {
    console.log(hoverBlue())
})
square.addEventListener("mousedown", function() {
    console.log(mouseDownRed())
})
square.addEventListener("mouseup", function() {
    console.log(mouseUpYellow())
})
square.addEventListener ("dblclick", function() {
    console.log(doubleClickGreen())
})
square.addEventListener ("wheel", function() {
    console.log(scrollOrange())
})

document.addEventListener("keydown", function() {
    console.log(event.which);
  })