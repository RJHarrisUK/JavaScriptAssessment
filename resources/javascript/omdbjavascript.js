// OMDB Javascript

// READ - Get specific classroom (working)
function getResult() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);

        console.log(response.Search);

        let template = null;
        let len = response.Search.length;
        for (var i = 0; i < len; i++) {

            template = '<tr><td>' + response.Search[i].Title
                + '</td><td>' + response.Search[i].Year
                + '</td><td>' + response.Search[i].Type
                + '</tr>'
            $('table').append(template);
        }

    }
    let movieName = (document.getElementById("searchbox").value);
    req.open("GET", "http://www.omdbapi.com/?s=" + movieName + "&apikey=a82907db");
    req.send();


}

