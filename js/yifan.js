
var years=[];

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    //console.log($('#searchText').val());
    //Get the value from the input search area
    let searchText = $('#searchText').val();

    getMovies(searchText);
    
console.log("hello+++++++++++++++++++");
    for(var i=0;i<years.length;i++){
      console.log(years[i]);
    }
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
      var years=[];
      //result that contain object that fetched
      let results = ' ';
      $.each(movies, (index, movie) => {
        years.push(movie.Year);
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
     //years 
    for(var i=0;i<years.length;i++){
      console.log(years[i]);
    }
      chartData(years);
     
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



/******  Chart  ******/

function chartData(years){

  let chart=`
  <canvas id="myChart" role="img"></canvsa>
  `;
  $('#Chart').html(chart);

   var a=0; /* -1950 */
   var b=0; /* 1951-1980 */
   var c=0; /* 1981-1990 */
   var d=0; /* 1991-2000 */
   var e=0; /* 2001-2010 */
   var f=0; /* 2011-2015 */
   var g=0 /* 2016-2020*/
 
   for(var i=0; i<years.length; i++){
     if(years[i]<=1950){
       a++;
     }
     if(years[i]<=1980 && years[i]>=1951){
       b++;
     }  
     if(years[i]<=1990 && years[i]>=1981){
       c++;
     }
     if(years[i]<=2000 && years[i]>=1991){
       d++;
     }
     if(years[i]<=2010 && years[i]>=2001){
       e++;
     }
     if(years[i]<=2015 && years[i]>=2011){
       f++;
     }
     if(years[i]<=2020 && years[i]>=2016){
      g++;
    }
   }

  let data = {

    labels: ['-1950','1951-1980','1981-1990','1991-2000','2001-2010','2011-2015','2016-2020'],
    datasets: [{
        label: '# of votes',
        data: [a,b,c,d,e,f,g],
        backgroundColor:[ 
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(199, 199, 199, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1
    }]
  }
  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      response: true,

      options:{
        legend:{
          display:true,
          position: "bottom",
          labels:{
            data:['-1950','1951-1980','1981-1990','1991-2000','2001-2010','2011-2020']
          }
        },
        
        title:{
          display: true,
          text: 'Searched Movies Released Year BarChart',
          fontSize: 20  
        },
        scales: {
          
          xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
              labelString: 'Released Year',
            },
            ticks:{
              fontSize:16
            }
					}],
					yAxes: [{
            display: true,
            gridLine: {
              display:true,
              color:"#FFFFFF",

            },
						scaleLabel: {
							display: true,
							labelString: 'Number of Movies'
            },
            ticks:{
              fontSize:16
            },
            position: 'left',
            
					}]
        }
      }
     });
    
}
