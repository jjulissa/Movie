// let apiKey = "apikey=6b65d0f5"; 
let input = document.querySelector(".search input"); 
let btnSearch = document.querySelector(".search button"); 
let imgHomeWelcome = document.querySelector(".imgHomeWelcome"); 
let form = document.querySelector("form"); 
let allMovie = document.querySelector(".allMovie"); 
// console.log(form); 

// let api = fetch("http://www.omdbapi.com/?s=thor&page=2&apikey=6b65d0f5") ;
// let apiDetalle = fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6b65d0f5"); 
// let search = fetch("http://www.omdbapi.com/?t=${input}&apikey=6b65d0f5"); 

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    let buscar = input.value 

    fetch(`http://www.omdbapi.com/?s=${buscar}&apikey=6b65d0f5`)
        .then(res => res.json()) 
        .then(data => { 
            allMovie.innerText = ""

            data.Search.forEach((element) => {
             console.log(element); 

            let cadaPelicula = document.createElement("div"); 
            cadaPelicula.classList.add("cadaPelicula");  
            cadaPelicula.innerHTML = 
        `
            <div> 
                <img src="${element.Poster}" alt="imgPosterPelicula"> 
                <h1>Title: ${element.Title}</h1> 
                <p>Year: ${element.Year}</p>  
                <a class="btnDetalle" href="./Page/movie.html?id=${element.imdbID}">Details</a> 
            </div>
        `
        imgHomeWelcome.remove(); 
        allMovie.append(cadaPelicula) 

})})  

    .catch (error => console.log("error"))
}); 




 


// .forEach(element => {return getUrl(e.url)})) 




    