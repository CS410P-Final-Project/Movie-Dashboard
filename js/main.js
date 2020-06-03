/* Click Help */
var helpBtn = document.getElementById("helpButton");
helpBtn.onclick = function getHelp() {
    alert("For any questions\nPlease contact administrator via email\nBy click the mail button under help");
}
/* Click Mail Confirm Sending email or not */
var mailBtn = document.getElementById("mailButton");
mailBtn.onclick = function sendMail() {
    return confirm('Do you want to send e-mail to the administrator for help?');
}




console.log("hello helloe helllll");


var randomNumber = Math.floor((Math.random() * 10) + 1);

console.log(randomNumber);

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


const idURL = 'http://www.omdbapi.com?i=tt';
//const myKey = '&apikey=45cdbd93';
//const myKey = '&apikey=bad1e2f';
const myKey = '&apikey=bad1e2f';
//const myKey = '&apikey=5097481f';

var randomMovie = pad(Math.floor((Math.random() * 2155529) + 1), 7);

console.log(randomMovie);



function findMovie(index) {

    axios.get(idURL + randomMovie + myKey)
        .then((response) => {
            let movie = response.data;
            // $('#recommendMovie1').attr('src', movie.Poster);
        })
        .catch((error) => {
            console.log(error);
        });


}


//get movive
function getbasePage(randomMovie) {
    return response = fetch(idURL + randomMovie + myKey)
        .then(response => response.json())

}

//let movie =await getbasePage();

//console.log(movie);

getData = async function () {
    try {
        let base = await getbasePage(randomMovie);
        console.log(base);
        console.log(base.Title)
        //$('#recommendMovie0').attr('src', base.Poster);
        $('#recommendMovie'+0).attr('src', base.Poster);
    } catch (err) {
        console.log('Err', err);
    }
}


//getData()


async function setMovies() {
    //generate a random movie ID
    var randomMovie = pad(Math.floor((Math.random() * 2155529) + 1), 7);

    let base = await getbasePage(randomMovie);
    var check = 0;
    var i = 0;
    do {
        randomMovie = pad(Math.floor((Math.random() * 1000000) + 1), 7);
        base = await getbasePage(randomMovie);
       // if (base.ok) {
            if (base.Poster != "N/A") {
                check = 1;
               $('#recommendMovie'+i).attr('src', base.Poster);
               $('#title'+i).text(base.Title);
               let tohtml=`
                 <button class="MovieDetail"  onclick = "movieSelected('${base.imdbID}')">Movie Details</button>
               `;
               $('#movie'+i).html(tohtml);
            }
            else {
                check = 0;
            }

        //}
        //else {
         //   check = 0;
       // }

        i+=check;
    } while (i < 10)
}

setMovies();


function movieSelected(id) {
    sessionStorage.setItem('movieID', id);
    window.location = 'movie.html';
    return false;
  }
 /* 
  function getMovie() {
    let movieId = sessionStorage.getItem('movieID');
  
    axios.get(idURL + movieId + myKey)
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let onscreen = `
                <div class = 'row'>
                  <div class = "col-md-4">
                    <img src="${movie.Poster}" class="img-thumbnail" alt="Responsive image">
                  </div>
                  <div class = "col-md-8">
                    <h3>${movie.Title}</h2>
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
                <br>
                <br>
                <div class = "row">
                  <div class="well">
                  <h3>Plot:</h3>
                    ${movie.Plot}
                    <br>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View Imdb Page</a>
                  </div>
                </div>
        `;
        $('#movie').html(onscreen);
  
      })
      .catch((error) => {
        console.log(error);
      });
  }

*/ 
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





