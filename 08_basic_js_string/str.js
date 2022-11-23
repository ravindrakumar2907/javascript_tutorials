  // String : A JavaScript string is zero or more characters written inside quotes.

  // single qoute '' or ""

  let name = "ravi";
  let lastName = 'more';


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


let demo = 'ravi "" more';

// String is array of characters - it means 's' is character. 
// Array start with 0
console.log(name.length);
console.log(name[0]);// 0-3 : 0 1 2 3

//Escape Character
/*
The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash

*/

let text = "We are the so-called \'Vikings\' from the north.";
console.log(text);

/*
document.getElementById("demo").innerHTML = "Hello Dolly!";

document.getElementById("demo").innerHTML = "Hello \
Dolly! \
this is kjbldskjbsad \
hjsdahjbvasd";

*/

// checking equal

let x = "John";// string
let y = new String("John");// object

if (x == y){ // only check the content.
console.log("eqaul");
}else{
    console.log("not eqaul");
}

if (x === y){ // its checks for data type as well
    console.log("eqaul");
    }else{
        console.log("not eqaul");
    }