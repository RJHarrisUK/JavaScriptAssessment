// OMDB Javascript

// READ - Get specific classroom (working)
function getResult() {

    let Parent = document.getElementById("table");
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);



        console.log(response.Search);
        let tableBuild = null;
        let len = response.Search.length;
        $('table').clear;
        for (var i = 0; i < len; i++) {

            tableBuild = '<tr><td>' + response.Search[i].Title
                + '</td><td>' + response.Search[i].Year
                + '</td><td>' + response.Search[i].Type
                + '</tr>'
            $('table').append(tableBuild);
        }

    }
    let movieName = (document.getElementById("searchbox").value);
    req.open("GET", "http://www.omdbapi.com/?s=" + movieName + "&apikey=a82907db");
    req.send();


}

