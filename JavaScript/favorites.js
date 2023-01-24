let respuestaMovieFavorite = JSON.parse(localStorage.getItem("MovieFavorite")); 
let mainFavorites = document.querySelector(".mainFavorites"); 


respuestaMovieFavorite.forEach(element => { 
    let favMovie = document.createElement("div"); 
    favMovie.classList.add("favMovie"); 
    favMovie.innerHTML = 
        `  
            <img class="imgPoster" src="${element.Poster}" alt=""> 

            <div class="detalleMovieFav"> 
                <h1>Title: ${element.Title}</h1> 
                <p>Release Year: ${element.Year} </p> 
                <p>Duration: ${element.Runtime} </p> 
                <p>Director: ${element.Director} </p> 
                <p>Synopsis: ${element.Plot} </p> 
                <button class ="btnDelete" >Delete</button>
            </div>
        `
    mainFavorites.append(favMovie); 
    
    let btnDelete = document.querySelector(".btnDelete"); 

    btnDelete.addEventListener("click", (event) => {  
        event.preventDefault()
        favMovie.remove()
    })
});
