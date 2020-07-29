var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();


function forception(arr, letters) {
  var newArr = []
  var alphabetSplit = letters.split("");
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + ": ");
    for (var j = 0; j < alphabetSplit.length; j++) {
      newArr.push(alphabetSplit[j]);
    }
  }
  return newArr
}

var nameArr = forception(people, alphabet)

console.log(nameArr)