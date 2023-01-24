let form = document.querySelector(".SignUp"); 
let firstName = document.querySelector("#firstName"); 
let lastName = document.querySelector("#lastName"); 
let email = document.querySelector("#email"); 
let password = document.querySelector("#password"); 
let phoneNumber = document.querySelector("#phoneNumber"); 

form.addEventListener("click", (event) => { 
    event.preventDefault(); 
    let sign = document.createElement("p"); 
    sign.innerText = "First Name: " + firstName.value + 
        ", Last Name: " + lastName.value + 
        ", Email: " + email.value + 
        ", Password: " + password.value + 
        ", Phone Number: " + phoneNumber.value 
        
    localStorage.setItem("signUp", JSON.stringify(sign.innerText));
}) 

