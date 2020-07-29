var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit)
console.log("vegetables: ", vegetables)

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var indexOfOrange = fruit.indexOf("orange")
console.log(indexOfOrange)

fruit.push(indexOfOrange)
console.log(fruit)

var lengthOfVeg = vegetables.length
console.log(lengthOfVeg)

vegetables.push(lengthOfVeg)
console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

var result = food.splice(4, 2)
console.log(result)
console.log(food)

var allReversed = food.reverse()
console.log(allReversed)

var splitArr = allReversed.join()
console.log(splitArr)

//OMGSH I DID IT THE FIRST TRY YAYAYA!!