// Write a function to return repeat characters from String.

// ravindra
// Ans: ra

////let name = "ravindra";

//console.log(duplicateCaharcters);
//let data = itr.next()
//data.value[0]
//console.log("char-Array:" + charArray.length);

function findDuplicateCharacters(str){
    console.log("org name value is: " + str);
    let name = str;
    let duplicateCaharcters = [];
    
    for(let i = 0; i < name.length; i++){
        let count = 0;
        let char = name.charAt(i);
        //console.log(char);
        let charArray =  name.matchAll(char); //name.match(/char/g);
        for (result of charArray) {
            count = count + 1; // count++
            //console.log(result);
        }
        if(count >= 2){
            if(! duplicateCaharcters.includes(char)){
                duplicateCaharcters.push(char);
            }
            
        }
        
    }
    return duplicateCaharcters;
}

let duplicateStr = findDuplicateCharacters("i am going");
console.log(duplicateStr);


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll('t')];// iterator to array conversion

console.log(array.length);
console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);