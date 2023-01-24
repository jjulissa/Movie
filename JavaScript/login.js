let formLogin = document.querySelector(".formLogin"); 
let userName = document.querySelector("#userName"); 
let password = document.querySelector("#password"); 


formLogin.addEventListener("click", (event) => { 
    event.preventDefault(); 
    let login = document.createElement("p"); 
    login.innerText = "User Name: " + userName.value + 
        ", Password: " + password.value 
        
    localStorage.setItem("login", JSON.stringify(login.innerText));
}) 


