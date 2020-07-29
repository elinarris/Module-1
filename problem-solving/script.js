let arr = [37, 12, 3, 7, 90, 400, 1, 28];
let anotherArr = [56, 44, 36, 74];

//complicated way of finding largestNum w/o Math.max()
function largestNum(numbers) {

    var largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if ( numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest;
}

console.log( largestNum(anotherArr) )

//complicated way of finding lowest num w/o Math.min()
function lowestNum(numbers) {

    var lowest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if ( numbers[i] < lowest ) {
            lowest = numbers[i]
        }
    }
    return lowest;
}

console.log( lowestNum(anotherArr) )


//simpler way lol
//return Math.max.apply(NaN, numbers);
//or
//return Math.min.apply(NaN, numbers);
//------------------------------------------------------------------------//

let wordsArr = [":*", "what!", "!hello!", "how?", "meow*", "!!!", "@_*"];

function characFunc ( strings ) {
    var star = strings.indexOf('*');
    var exc = strings.indexOf('!');
    var quest = strings.indexOf('?');
    for (var i = 0; i < strings.length; i++) {
    if (strings[i] === star) {
        console.log(strings[i])
    } else if (strings[i] === exc) {
        console.log(strings[i])
    } else if (strings[i] === quest) {
        console.log(strings[i])
    }
}
}

console.log( characFunc (wordsArr) )
