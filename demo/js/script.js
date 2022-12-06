/**
 * This is for login
 */

 function isEmpty(input){
    if(input === "" || input === " " || input === undefined ){
        return true;
    }
    return false;
}

function login(){
    //username password userType
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;

    if(isEmpty(username) || isEmpty(password) || isEmpty(userType)){
        alert("Please check your input.");
        return false;
    }
    
    if(username === "ravi" && password=== "ravi" && userType === "admin"){
        //redirect to admin page
        location.href = "admin.html";
    }else if(username === "ravi" && password=== "ravi" && userType === "user"){
        location.href = "index.html";
    }
}
// login button event
document.getElementById("login").addEventListener("click", login);