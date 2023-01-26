import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; 
import { getFirestore, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"; 
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries         
// Your web app's Firebase configuration     

  const firebaseConfig = {
    apiKey: "AIzaSyBh2NbbGCuvBOzKm7fv3-9n3aS5StV17L4",
    authDomain: "movieapi-omdbapi.firebaseapp.com",
    projectId: "movieapi-omdbapi",
    storageBucket: "movieapi-omdbapi.appspot.com",
    messagingSenderId: "867886674962",
    appId: "1:867886674962:web:bf2277e9c3e381b4a714cb"
  };

// Initialize Firebase
    const app = initializeApp(firebaseConfig); 
    const db = getFirestore(app); 
    const auth = getAuth(app); 

    const user = null;

let form = document.querySelector(".SignUp"); 

// let nombre = document.querySelector("#firstName"); 
// let firstName = nombre.value; 
// let apellido = document.querySelector("#lastName"); 
// let lastName = apellido.value; 
// let mail = document.querySelector("#email"); 
// let email = mail.value; 
// let contrasena = document.querySelector("#password"); 
// let password = contrasena.value; 
// let telefono = document.querySelector("#phoneNumber"); 
// let phoneNumber = telefono.value; 


form.addEventListener("submit", (event) => { 
    event.preventDefault();  

    let firstName = event.target.firstName.value; 
    let lastName = event.target.lastName.value; 
    let email = event.target.email.value; 
    let password = event.target.password.value; 
    let phoneNumber = event.target.phoneNumber.value;

    let sign = document.createElement("p"); 
    sign.innerText = "First Name: " + firstName + 
        ", Last Name: " + lastName + 
        ", Email: " + email + 
        ", Password: " + password + 
        ", Phone Number: " + phoneNumber 
        
  localStorage.setItem("signUp", JSON.stringify(sign.innerText));

        

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user; 

      // set(ref(database, 'users/' +user.uid), { 
      //   firstName: firstName, 
      //   lastName: lastName, 
      //   email: email, 
      //   phoneNumber: phoneNumber 
        
      // }) 

      alert("User created"); 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 
    
    }); 
       
    location.assign('../index.html'); 
}) 






