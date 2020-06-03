/*
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      //console.log($('#searchText').val());
      //Get the value from the input search area
      let searchText = $('#text').val();
      console.log(searchText); 
      //getMovies(searchText);
      movietosearch(searchText);
      //getMovies();
  //   getMovies(searchText);
      e.preventDefault();
    })
  });


  function movietosearch(searchText){
    window.location = 'search.html';
    //sessionStorage.setItem('movie', searchText);
    $('#searchText').val(searchText);

    return false;
  }


  function getMovies(searchText) {
    //console.log(searchText);
  //let searchText=sessionStorage.getItem('movieID'); 
    axios.get(searchURL + searchText + myKey)
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let results = ' ';
        $.each(movies, (index, movie) => {
          results += `
              <div class="col-md-3">
                <div class="well text-center">
                  <img src="${movie.Poster}">
                  <h5>${movie.Title}</h5>
                  <a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" herf="#">Movie Details</a>
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
*/