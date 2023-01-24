let detalleMovie = document.querySelector(".detalleMovie"); 
// console.log(detalleMovie);  

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString); 
var anuncioParam = urlParams.get('id'); 
// console.log(anuncioParam);

fetch(`http://www.omdbapi.com/?apikey=6b65d0f5&i=${anuncioParam}`) 
    .then(res => res.json()) 
    .then(data => {  
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
                    <a class="btnFavorites" href="./favorites.html">Add to Favorites</a> 
                </div> 
            </div>
            `
            detalleMovie.append(detailMovie); 
        
        let btnFavorites = document.querySelector(".btnFavorites"); 
        let imgIcono = document.querySelector(".imgIcono"); 
        let arrayFavorite = JSON.parse(localStorage.getItem('MovieFavorite')) || []; 

        btnFavorites.addEventListener("click", (event) => {  
            event.preventDefault(); 
            if (!arrayFavorite.find((e) => e.imdbID == data.imdbID)) {
                arrayFavorite.push(data);
                localStorage.setItem("MovieFavorite", JSON.stringify(arrayFavorite));
            } else {
                alert("Already added to favorites");
            }
        }) 

        imgIcono.addEventListener("click", () => {  
            event.preventDefault(); 
            if (!arrayFavorite.find((e) => e.imdbID == data.imdbID)) {
                arrayFavorite.push(data);
                localStorage.setItem("MovieFavorite", JSON.stringify(arrayFavorite));
            } else {
                alert("Already added to favorites");
            }   
    }) 
    
})
    .catch(error => console.log(error)); 




