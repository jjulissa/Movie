import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; 
import { getFirestore, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"; 
  
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


let formLogin = document.querySelector(".formLogin"); 
// let userName = document.querySelector("#userName"); 
// let password = document.querySelector("#password"); 


formLogin.addEventListener("submit", (event) => { 
    event.preventDefault(); 


    let userName = event.target.userName.value; 
    let password = event.target.password.value; 

    let login = document.createElement("p"); 
    login.innerText = "User Name: " + userName.value + 
        ", Password: " + password.value 
        
    localStorage.setItem("login", JSON.stringify(login.innerText));  


  signInWithEmailAndPassword(auth, userName, password)
    .then((userCredential) => {
      const user = userCredential.user; 
      

    alert('🤪')
    }) 

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 

      console.log(errorCode); 
      console.log(errorMessage);
    });
}) 


