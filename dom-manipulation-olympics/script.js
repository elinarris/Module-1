var htmlBody = document.getElementById("body");
var newHeader = document.createElement("h1");
var newHeaderTag = document.getElementsByTagName("h1");

console.log(htmlBody)
console.log(newHeader)
console.log(newHeaderTag)

htmlBody.append(newHeader.textContent = "Javascript Made This!!")
htmlBody.style.fontSize = "20px"
newHeader.style.backgroundColor = "gray"
htmlBody.style.fontWeight = "bold"
