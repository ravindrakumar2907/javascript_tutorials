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
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let userType = document.getElementById("userType").value.trim();
    let email = null;
    let passwordDb = null;
    let isAdmin = false;

    if(isEmpty(username) || isEmpty(password) || isEmpty(userType)){
        alert("Please check your input.");
        return false;
    }
    
    let registerObject = localStorage.getItem(username);
    if(registerObject != null &&  registerObject != undefined){
        registerObject = JSON.parse(registerObject);
        email = registerObject.email;
        passwordDb = registerObject.password;
        isAdmin = registerObject.userType;
        if(username === email && password=== passwordDb && userType === isAdmin){
            //redirect to admin page
            location.href = "admin.html";
        }else if(username === email && password=== passwordDb && userType === "user"){
            location.href = "index.html";
        }else{
            alert("Username or password is not valid");     
        }
    }

}

function registerFunction(){
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let fee = document.getElementById("fee").value.trim();
    let password = document.getElementById("password").value.trim();

    if(isEmpty(firstName) && isEmpty(firstName) && isEmpty(firstName)
     && isEmpty(firstName) && isEmpty(firstName) && isEmpty(password)){
        alert("Please check your input.");
        return false;
    }

    registerObj = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password: password,
        subject : subject,
        fee : fee
    }

    
    localStorage.setItem(email, JSON.stringify(registerObj));
    alert("Registration is success.");
}


// login button event

if(document.getElementById("login")){
    document.getElementById("login").addEventListener("click", login);
}
if(document.getElementById("registerUser")){
    document.getElementById("registerUser").addEventListener("click", registerFunction);
}

