/* 
Problem 1
    Write a function that takes three strings - a verb, an adjective, and a noun
    - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN".
    Use ES6 template literals.
*/ 

function madLib(verb, adjective, noun) {
 console.log(`We shall ${verb} the ${adjective} ${noun}`)
};

madLib("make", "best", "guac")

/* 
isSubstring
Input:
    1) A String, called searchString.
    2) A String, called subString.
Output: 
    A Boolean. true if the subString is a part of the searchString.
*/

function isSubstring(searchString, subString) {
    wordsToSearch = searchString.split(" ")
    
    console.log(wordsToSearch.some( element => element === subString));
};

isSubstring("I love cars", "cars") // -> true
isSubstring("I love cars", "car") // -> false

/* 
fizzBuzz
3 and 5 are magic numbers.

Define a function fizzBuzz(array) that takes an array and returns a new array of 
every number in the array that is divisible by either 3 or 5, but not both.
*/

function fizzBuzz(array) {
    const output = []
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 5 === 0 || array[i] % 3 === 0) {
            if(array[i] % 5 === 0 && array[i] % 3 === 0) {
                continue;
            } else {
                output.push(array[i])
            }
        } else {
            continue;
        }
    }

    return output;
}; 

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])) // -> [ 3, 5, 6, 9, 10, 12 ]


/*
isPrime
Define a function isPrime(number) that returns true if number is prime. 
Otherwise, false. Assume number is a positive integer.
*/

function isPrime(num) {
    if(num === 2 || num === 3) {
        return true;
    } else if(num === 1 || num === 0) {
        return false;
    };

    for(let counter = 2; counter < num; counter++) {
        if(num % counter === 0) {
            return false;
        }
    }
  return true;
}

console.log(isPrime(11)) // -> true
console.log(isPrime(8)) // -> false
console.log(isPrime(4)) // -> false

/*
sumOfNPrimes
Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the 
first n prime numbers. Hint: use isPrime as a helper method.
*/


function firstNPrimes(num) {
    output = []
    for(let counter = 0; output.length < num; counter++) {
        if(isPrime(counter)) {
            output.push(counter);
        } else {
            continue;
        }
    }
    return output;
}

console.log(firstNPrimes(11)); // -> [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]

function sumOfNPrimes(num) {

    arr = firstNPrimes(num);

    return arr.reduce((acc, val) => acc + val);
}

console.log(sumOfNPrimes(11))   

