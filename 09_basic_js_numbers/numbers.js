
//JavaScript Numbers
//https://www.w3schools.com/js/js_numbers.asp
//JavaScript has only one type of number. Numbers can be written with or without decimals.

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
console.log(x);

//Extra large or extra small numbers can be written with scientific (exponent) notation:
let x1 = 123e5;    // 12300000
let y1 = 123e-5;   // 0.00123


//Integer Precision
//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x2 = 999999999999999;   // x will be 999999999999999
let y2 = 9999999999999999;  // y will be 10000000000000000
//The maximum number of decimals is 17.

/*
Floating Precision
Floating point arithmetic is not always 100% accurate:

*/


let x3 = 0.2 + 0.1;


//To solve the problem above, it helps to multiply and divide:

let x4 = (0.2 * 10 + 0.1 * 10) / 10;





//Adding Numbers and Strings

let a = 10;
let b = 20;

console.log(a+b); // 30

let c = 10;
let d = "name";

console.log(c + d );// 10name

console.log( a + b + d); //30name


console.log( d + a + b );// name1020


let e = "10";
let f = "20";
let z = e + f; // 1020
console.log(z);


/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x = 100 / "10";
You can use the global JavaScript function isNaN() to find out if a value is a not a number:
*/

//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
