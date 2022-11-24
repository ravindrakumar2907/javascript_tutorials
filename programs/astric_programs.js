/*
program to print the *
*
**
***
****
*****


88888
8888
888
88
8


        8
    8       8
8   8       8   8

*/

/*

*****
*****
*****
*****
*****

*/
console.log("1 \n");
let data = "";
for(let i = 5; i > 0; i--){ // outer row
    for(let j = 5; j > 0; j--){ // inner columns
        data += " * ";
    }
    console.log(data);
    data = "";
    console.log("\n");
}


/*
*
**
***
****
*/
// row 0 -3, col 0-3
console.log("2 \n");
var str = "";
for(let row = 0; row < 4; row++){ // row
    for(let col = 0; col <= row; col++){ // col
        str += " * ";
    }
    console.log(str);
    console.log("\n");
    str = "";
}

/*
 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *
*/
console.log("3 \n");
var str = "";
for(let row = 0; row <= 4; row++){ // row 0 3
    for(let col = 4; col >= row; col--){ // col col = 1, row = 3
        str += " * ";
    }
    console.log(str);
    console.log("\n");
    str = "";
}



console.log(" 4\n");
var str = "";
for(let row = 0; row < 4; row++){ // row 0 3
    for(let col = 4; col <= 4; col--){ // col col = 1, row = 3
        str += " * ";
    }
    console.log(str);
    console.log("\n");
    str = "";
}


