

// for loop
for(let i = 0; i<=5; i++){
    for(let i = 0; i<=5; i++){
        //console.log(i);
    }
    console.log("\n");
}



// while loop

let j =0; // intilization
while(j <= 5){// condition
    //console.log(j);
    j++; // incremtn
}


// do -while
let a = 0; // intilization
do {
    //console.log("doing before condition check: " + a);
    a++;// incremtn
}while(a < 5);// condition



let arraydata = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < arraydata.length ; i++){
    console.log(arraydata[i]);// charAt(i); when there us string
}

console.log("\n");
for(let i of arraydata){
    console.log(i);
}