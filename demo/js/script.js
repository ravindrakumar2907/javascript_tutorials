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
            alert("Login success redirecting to admin section.");
            location.href = "admin.html";
        }else if(username === email && password=== passwordDb && userType === "user"){
            alert("Login success redirecting to home page.");
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

function getAllUsersDetail(){
    alert("Reading Users information from DB.");
    
    let tableObject = document.getElementById("tableBody");

    let local = localStorage;
    for (var key in local) {
        if(localStorage.getItem(key) != null){
            console.log(key);
            let jsonData = localStorage.getItem(key)
            registerObject = JSON.parse(jsonData);
                //tableObject.insetRow();
             // Create row element
            let row = document.createElement("tr")
      
            // Create cells
            let c1 = document.createElement("td") // node
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            c1.innerHTML = registerObject.firstName; // String
            c2.innerHTML = registerObject.lastName;
            c3.innerHTML = registerObject.email;
            c4.innerHTML = registerObject.fee;

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            
            // Append row to table body
            tableObject.appendChild(row)
        }
    }
}

function getAllUsersDetail1(){
    alert("Reading Users information from DB.");
    
    let tableObject = document.getElementById("tableBody");

    let local = localStorage;
    for (var key in local) {
        if(localStorage.getItem(key) != null){
            console.log(key);
            let jsonData = localStorage.getItem(key)
            registerObject = JSON.parse(jsonData);
                //tableObject.insetRow();
            let row = tableObject.insertRow(-1);
            // Create table cells
            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);
            let c4 = row.insertCell(3);
            c1 = registerObject.firstName;
            c2 = registerObject.lastName;
            c3 = registerObject.email;
            c4 = registerObject.fee;
        }
    }
}

// login button event

if(document.getElementById("login")){
    document.getElementById("login").addEventListener("click", login);
}
if(document.getElementById("registerUser")){
    document.getElementById("registerUser").addEventListener("click", registerFunction);
}

/*
if(document.getElementById("getAllUsers")){
    document.getElementById("getAllUsers").addEventListener("click", getAllUsersDetail);
}*/


