//header
var header = document.getElementById("header")
var body = document.getElementById("body")

header.append ("Javascript Made This!!")
header.style.color = "black"
header.style.fontSize = "30px"
header.style.textAlign = "center"


//h1
var br = document.createElement("br")
var newSpan1 = document.createElement("span")
var newSpan2 = document.createElement("span")

var header = document.getElementById("header")
newSpan1.textContent = "Paula"
newSpan2.textContent = " created this!"
header.append(br)
header.append(newSpan1)
header.append(newSpan2)
newSpan1.style.fontSize = "15px"
newSpan2.style.fontSize = "15px"
newSpan1.style.color = "pink"

//messageleft
var arrayL = document.querySelectorAll(".left")
arrayL[0].textContent = "Hey what's up?"
arrayL[1].textContent = "Nothing much."

//messageright
var arrayR = document.querySelectorAll(".right")
arrayR[0].textContent = "Nm. What's up with you?"
arrayR[1].textContent = "Cool."

