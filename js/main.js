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
const myKey = '&apikey=45cdbd93';
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
            }
            else {
                check = 0;
            }

        //}
        //else {
         //   check = 0;
       // }

        i+=check;
    } while (i < 9)
}

setMovies();


