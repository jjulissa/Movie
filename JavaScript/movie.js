let detalleMovie = document.querySelector(".detalleMovie"); 
// console.log(detalleMovie);  

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString); 
var anuncioParam = urlParams.get('id'); 
// console.log(anuncioParam);

fetch(`http://www.omdbapi.com/?apikey=6b65d0f5&i=${anuncioParam}`) 
    .then(res => res.json()) 
    .then(data => {  
        console.log(data);
        let div = document.createElement("div"); 
        div.classList.add("detailMovie"); 
        div.innerHTML = 
            ` 
                <img src="${data.Poster}" alt=""> 
                <h1>Title: ${data.Title}</h1> 
                <img width ="50px" src="../Assets/favorites.png" alt="imageFavorites"> 
                <p>Release Year: ${data.Year} </p> 
                <p>Duration: ${data.Runtime} </p> 
                <p>Director: ${data.Director} </p> 
                <p>Synopsis: ${data.Plot} </p> 
                <a class="btnAddFavorites" href="./favorites.html">Add to Favorites</a>
            `
            detalleMovie.append(div); 
    })
    .catch(error => console.log(error)); 

