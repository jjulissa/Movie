let formForgetJs = document.querySelector(".formForgetJs"); 
let btnForgetJs = document.querySelector(".btnForgetJs"); 
let email = document.querySelector("#email"); 
let mainForget = document.querySelector(".mainForget"); 

// console.log(email); 

btnForgetJs.addEventListener("click", (event) => { 
    event.preventDefault() 
    let mensaje = document.createElement("p"); 
    mensaje.innerText = "✅ Check your email to create a new Password"; 
    formForgetJs.remove() 

    // console.log(email.value); 
    mainForget.append(mensaje) 
    localStorage.setItem("emailForgetPassword", JSON.stringify(email.value))
})
