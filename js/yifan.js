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
const myKey = '&apikey=bad1e2f';


function getMovies(searchText) {
  //console.log(searchText);

  axios.get(searchURL+searchText+myKey)
    .then((response)=>{
      console.log(response);
      let movies =response.data.Search;
      let results = ' ';
      $.each(movies,(index,movie)=>{
          results += `
            <div class="col-md-3">
              <div class ="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" herf="#">Movie Details</a>
              </div>
            </div>
          `;
      });
      $('#movies').html(results);
    })
    .catch((error)=>{
        console.log(error);
    })
}