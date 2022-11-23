
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";// string is nothing but array of characters
let length = text.length;
console.log(length);
console.log(text[0]);

// == content
// === conetent + datatype
//https://www.w3schools.com/js/js_string_methods.asp

//JavaScript String slice()

let name = "This is my book";
console.log(name.length);
console.log(name.slice(5, 6));

//JavaScript String substring()
/*
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

*/

var str = "Apple, Banana, Kiwi";
var part = str.substring(-1, 13);
console.log("substring: " + part);
console.log("slice: " + str.slice(-10, -1));

//JavaScript String substr()
/* substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
*/
var str = "Apple, Banana, Kiwi";
var part = str.substr(7, 6);
console.log("substr :  " +part );

// replace
var text = "Please visit MicroSoft and Microsoft!";
var newText = text.replace(/Microsoft/i, "W3Schools");
console.log("replace:  " + newText);
//replaceAll()
/*
Note
replaceAll() is an ES2021 feature.

replaceAll() does not work in Internet Explorer.
*/


//Extracting String Characters

let myName = "ravi";// 0,1,2,3 4
//charAt(position)
//text.charCodeAt(0);
//&nbsp
function myCharAt(charPosition){
    let mychar = myName[parseInt(charPosition)];
    console.log("myName: " + myName + " Position: " + parseInt(charPosition) + " mychar:" + mychar);
    return mychar;
}

console.log("myCharAt  :" + myCharAt(3));

// A- 65
// a 97

/*
avaScript String charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

*/


// indexOf()

let email = "ravi@gamil.com";

let positionOfAt = email.indexof("@");
console.log(positionOfAt);
let dotOperator = email.indexof(".");
console.log(dotOperator);

