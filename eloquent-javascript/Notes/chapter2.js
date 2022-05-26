/*
    Bindings - tentacles not boxes.  variable name reaches out and attaches (becomes bound to a value)
    Binding names can include letters, numbers, $ dollar sign, and _ underscore.  No other characters

    Number.isNaN(value) pretty self explantory but useful to know

    when typecasting strings to boolean.  all strings are true except for empty string ""
*/

let row = '#';
for(let i = 0; i < 7; i++) {
    console.log(row);
    row += '#';
}

row = '#'
while(row.length < 8) {
    console.log(row);
    row += '#'
}

for (let i = 1; i <= 100; i++ ) {
    let toPrint = '';

    if (i % 3 === 0) {
        toPrint += 'Fizz';
    }

    if (i % 5 === 0) {
        toPrint += 'Buzz';
    }

    if (!toPrint) {
        console.log(i);
    } else {
        console.log(toPrint);
    }
}

let size = 20;

// for(let i = 0; i < size; i++) {
//     let line = '';
//     for(let j = 0; j < size; j++) {
//         if(i % 2 === 0) {
//             line += j % 2 === 0 ? ' ' : '#'
//         } else {
//             line += j % 2 === 0 ? '#' : ' '
//         }
//     }
//     console.log(line);
// }
let line = '';
for (let i = 0; i < size; i++) {
    
    for (let j = 0; j < size; j++) {

        line += (i + j) % 2 === 0 ? ' ' : '#'

    }
    line += '\n';
}
console.log(9 & 8);