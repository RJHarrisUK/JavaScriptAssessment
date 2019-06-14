// OMDB Javascript

// get result function
function getResult() {

    // clear table of child appends on click

    // quick method (removes header)
    // let Parent = document.getElementById("table").innerHTML = "";

    let Parent = document.getElementById("table");
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    // checks for table having appended nodes
    while (Parent.hasChildNodes()) {
        // this removes the first row which gets rid of the others automatically
        Parent.removeChild(Parent.firstChild);
    }
    // http request
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);

        // testing the response is correct in console
        console.log(response.Search);

        // setting up table variables
        let tableBuild = null;

        // for loop through response.Search to populate table with results
        let len = response.Search.length;
        for (var i = 0; i < len; i++) {

            tableBuild = '<tr><td>' + response.Search[i].Title
                + '</td><td>' + response.Search[i].Year
                + '</td><td>' + response.Search[i].Type
                + '</td><td>' + '<button type="button" class="btn btn-secondary" onclick="moreDetails()">More Details</button>'
                + '</tr>'
            $("table").append(tableBuild);
        }
    }
    // the get request
    let movieName = (document.getElementById("searchbox").value);
    // ?s= to get max 10 results (instead of ?t= for one) + my api key
    req.open("GET", "http://www.omdbapi.com/?s=" + movieName + "&apikey=a82907db");
    req.send();
}

