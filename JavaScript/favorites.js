import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; 
import { getFirestore, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
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

const docRef = doc(db, "favoritos", "user1");
let arrayFavorite = await getDoc(docRef).then(res=> res.data().arrayFavorite || []);
console.log(arrayFavorite);

// if (docSnap.exists()) {
//   console.log(docSnap.data().arrayFavorite);
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }


//let respuestaMovieFavorite = JSON.parse(localStorage.getItem("MovieFavorite")); 
let mainFavorites = document.querySelector(".mainFavorites"); 


arrayFavorite.forEach((element, i) => { 

    let favMovie = document.createElement("div"); 
    favMovie.classList.add("favMovie"); 
    favMovie.innerHTML = 
        `  
            <img class="imgPoster" src="${element.Poster}" alt=""> 
            <div class="detalleMovieFav"> 
                <h1>${element.Title}</h1> 
                <p>Release Year: ${element.Year} </p> 
                <p>Duration: ${element.Runtime} </p> 
                <p>Director: ${element.Director} </p> 
                <p>Synopsis: ${element.Plot} </p> 
                <button class ="btnDelete" >Delete</button>
            </div>
        `
    mainFavorites.append(favMovie); 
    
    favMovie.children[1].children[5].addEventListener("click", async(event) => { 
        // console.log(btnDelete.parentElement.parentElement);
        favMovie.remove(); 
        arrayFavorite = arrayFavorite.filter(e => e.imdbID !== element.imdbID)

        setDoc(doc(db,'favoritos','user1'), {
            arrayFavorite 
        })
        
    }) 
    
});

  

