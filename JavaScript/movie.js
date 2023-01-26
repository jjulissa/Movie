// Import the functions you need from the SDKs you need
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
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


let detalleMovie = document.querySelector(".detalleMovie"); 
// console.log(detalleMovie);  

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString); 
var anuncioParam = urlParams.get('id'); 
// console.log(anuncioParam);

fetch(`http://www.omdbapi.com/?apikey=6b65d0f5&i=${anuncioParam}`) 
    .then(res => res.json()) 
    .then(async(data) => {  
        // console.log(data);
        let detailMovie = document.createElement("div"); 
        detailMovie.classList.add("detailMovie"); 
        detailMovie.innerHTML = 
            ` 
            <div class="imgMovie"> 
                <img class="imgPoster" src="${data.Poster}" alt="">  
                <a class="imgIcono" href="./favorites.html"><img width ="50px" src="../Assets/favorites.png" alt="imageFavorites"></a>
            </div>  
            
            <div class="detalleMovie"> 
                <h1>Title: ${data.Title}</h1> 
                <p>Release Year: ${data.Year} </p> 
                <p>Duration: ${data.Runtime} </p> 
                <p>Director: ${data.Director} </p> 
                <p>Synopsis: ${data.Plot} </p> 

                <div class="btnAddFavorites"> 
                    <a class="btnFavorites" href="../Page/favorites.html">Add to Favorites</a> 
                </div> 
            </div>
            `
            detalleMovie.append(detailMovie); 
        
        let btnFavorites = document.querySelector(".btnFavorites"); 
        let imgIcono = document.querySelector(".imgIcono"); 
        let arrayFavorite = await getDoc(doc(db,'favoritos','user1')).then(res=> res.data().arrayFavorite || []);

        btnFavorites.addEventListener("click", async (event) => {  
            event.preventDefault(); 
            if (!arrayFavorite.find((e) => e.imdbID == data.imdbID)) {
                arrayFavorite.push(data);
                try {
                    await setDoc(doc(db, "favoritos", "user1"), {arrayFavorite});
                } catch (error) {
                    console.log('Error adding document: ', error);
                }

                localStorage.setItem("MovieFavorite", JSON.stringify(arrayFavorite));
            } else {  
                btnFavorites.innerText = "Already added to favorites"
                // let yaEsta = document.createElement("p"); 
                // yaEsta.innerText = "Already added to favorites"; 
                // yaEsta.classList.add("btnFavorites"); 
                // btnFavorites.remove()
                // detailMovie.append(yaEsta); 
                // btnFavorites.style.transform = "rotate(50deg)"; 
                // btnFavorites.style.background = "black";
                // btnFavorites.style.color = "black";
                // alert("Already added to favorites");
            }
        }) 

        imgIcono.addEventListener("click", async (event) => {  
            event.preventDefault(); 
            if (!arrayFavorite.find((e) => e.imdbID == data.imdbID)) {
                arrayFavorite.push(data); 
                try {
                    await setDoc(doc(db, "favoritos", "user1"), {arrayFavorite});
                } catch (error) {
                    console.log('Error adding document: ', error);
                }
                localStorage.setItem("MovieFavorite", JSON.stringify(arrayFavorite));
            } else { 
                btnFavorites.innerText = "Already added to favorites"
                // alert("Already added to favorites");
            }   
    }) 
    
})
    .catch(error => console.log(error)); 




