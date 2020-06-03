$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    //console.log($('#searchText').val());
    //Get the value from the input search area
    let searchText = $('#searchText').val();

    getMovies(searchText);
    e.preventDefault();
  })
});


console.log("hello");


const searchURL = 'http://www.omdbapi.com?s=';
const idURL = 'http://www.omdbapi.com?i=';
//const myKey = '&apikey=45cdbd93';
//const myKey = '&apikey=5097481f';
const myKey = '&apikey=bad1e2f';


function getMovies(searchText) {
  //console.log(searchText);

  axios.get(searchURL + searchText + myKey)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let results = ' ';
      $.each(movies, (index, movie) => {
        results += `
            <div class="col-md-3">
              <div class="well text-center">
                <img src="${movie.Poster}" id="movieImg" >
                <h5 id="movieTitle">${movie.Title}</h5>
                <a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" herf="#" id ="movieDetail">Movie Details</a>
              </div>
            </div>
          `;
      });
      $('#movies').html(results);
    })
    .catch((error) => {
      console.log(error);
    });
}

function movieSelected(id) {
  sessionStorage.setItem('movieID', id);
  window.location = 'movie.html';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieID');

  axios.get(idURL + movieId + myKey)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let onscreen = `
              <div class = 'row' id = "information-area">
                <div class = "col-md-4">
                  <img src="${movie.Poster}" class="img-thumbnail" alt="Responsive image">
                </div>
                <div class = "col-md-8">
                  <h3>  ${movie.Title}</h3>
                  <ul class="list-group">
                    <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
                    <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
                    <li class="list-group-item"><strong>IMDB Rating: </strong> ${movie.imdbRating}</li>
                    <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
                    <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
                    <li class="list-group-item"><strong>Actor: </strong> ${movie.Actors}</li>
                   </ul>
                </div>
              </div>
              <div class = "row">
                <div class="well">
                  <h3>Plot:</h3>
                  <h5>    ${movie.Plot}<h5>
                  <br>
                  <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary" id="goIMDB">
                  View Imdb Page
                  </a>
                </div>
              </div>
      `;
      $('#movie').html(onscreen);

    })
    .catch((error) => {
      console.log(error);
    });
}

$(".toggle-icon").click(function() {
  $('#nav-container').toggleClass("pushed");
});
