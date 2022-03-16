/*
    Functions
*/  
// console.log(halve(10));
//hummus(1); // throws reference error
//defining them:
const square = function (x) {
    return x * x;
}; //semicolon

//all functions hae a return value.  it is undefined in no return is specified.

//don't use var for variables to avoid hoisting/scope issues

//you can nest functions:
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

//hummus(1);

//we've been assigning functions as bindings.  We can also just declare them.  These functions are hoisted to the top of the program.
function halve(x) {
    return x / 2;
} //no semi colon

//arrow functions
const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

//opetional arguments
//console.log(power(2,3, true, false, ['hello', 'world'])); // extras will be ignored

const power2 = (base, exponenet) => {
    if(!exponenet) return power(base, 2);
    return power(base, exponenet);
}
// console.log(power2(2,3));
// console.log(power2(2));


//local bindings are recreating each time a function is called.  Being able to reference a specific instance of a loacl binding in an enclosing scope is called closure
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
// console.log(twice(5));



/* ****************************
|    EXERCISES                 |
****************************** */

function min(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        return "input two numbers";
    } 
    if (a <= b) return a;
    else return b;
}

console.log(min(0, 10));
console.log(min(0, -10));

function isEven(a) {
    if(a < 0) return 'number must be positive';
    if (a === 0) return true;
    else if (a ===1 ) return false;
    else return isEven(a-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// function countBs(word) {
//     let bCount = 0;
//     for(let i = 0; i < word.length; i++) {
//         if(word[i] === 'B') bCount++;
//     }
//     return bCount;
// }

function countChar(word, char) {
    let charCount = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === char) charCount ++;
    }
    return charCount;
}

function countBs(word) {
    return countChar(word, 'B');
}

console.log(countBs("BBC"));
console.log(countChar('kakkerlak', 'k'));