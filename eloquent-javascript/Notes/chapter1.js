//Values

//Types
//Numbers - Represented with 64 bits
const myCoolNumber = 1;
const myCoolDecimal = 1.23;
const myCoolExponent = 1.2345e9; //in otherwords to the nineth power.
//special numbers
const inf = Infinity;
const negInf = -Infinity;
const notANumber = NaN;

//Strings - 
let myString = 'Single Quote';
myString = "Double Quote";
myString = `Backticks`;

console.log(typeof myCoolDecimal);
console.log(typeof myString);

//boolean
console.log(1 < 2);
console.log('bob' < 'alice');
console.log(NaN == NaN) // returns false

//non-values
undefined 
null

let testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined

testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object