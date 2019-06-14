// OMDB Javascript

// READ - Get specific classroom (working)
function getResult() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);

        console.log(response.Search);

        let len = response.Search.length;
        for (var i = 0; i < len; i++) {
            console.log(response.Search[i].Title);
            console.log(response.Search[i].Year);
            console.log(response.Search[i].Type);
        }

    }
    let movieName = (document.getElementById("searchbox").value);
    req.open("GET", "http://www.omdbapi.com/?s=" + movieName + "&apikey=a82907db");
    req.send();


}

