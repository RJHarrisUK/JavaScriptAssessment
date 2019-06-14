// OMDB Javascript

// READ - Get specific classroom (working)
function getResult() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        console.log(response);
    }
    let movieName = (document.getElementById("searchbox").value);
    req.open("GET", "http://www.omdbapi.com/?t=" + movieName + "&apikey=a82907db");
    req.send();

    console.log(req);
}