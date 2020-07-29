var myForm = document["my-form"];
var li = document.createElement("li");
var ul = document.getElementById("ul");
var newButton = document.createElement("button")


myForm.addEventListener("submit", function(event) {
    event.preventDefault()

    var item = myForm.listItem.value

    ul.append(li)
    newButton.textContent = "x"
    li.textContent = newButton + item
    
    myForm.listItem.value = ""

    alert(item)
});

console.log(newButton)