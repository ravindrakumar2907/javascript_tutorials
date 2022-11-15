    //const usernameInputElement = document.getElementById("username");
    
//btn
function clickMe(){
    const username = document.getElementById("username").value;
    document.getElementById("clickDsplay").innerHTML = username;
    document.getElementById("clickDsplay").style.color = "yellow";
}

function mouseoverMe(){
    const username = document.getElementById("username").value;
    document.getElementById("clickDsplay").innerHTML = username;
    document.getElementById("clickDsplay").style.color = "red";
}


function keyupMe(){
    const username = document.getElementById("username").value;
    document.getElementById("clickDsplay").innerHTML = username;
    document.getElementById("clickDsplay").style.color = "green";
}

document.getElementById("btn").addEventListener("click", clickMe);
document.getElementById("btn").addEventListener("mouseover", mouseoverMe);
document.getElementById("username").addEventListener("keyup", keyupMe);


