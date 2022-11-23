
// Random DOM Access

/*
Accessing the HTML DOM is very slow, compared ti other JavaScript statements.
if you expect to access a DOM elements serverl times, access it once, and use it as a local varibales.

*/

const obj = document.getElementById("");
obj.innerHTML = "hellow";