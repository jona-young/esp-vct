/*  RESOURCE [8]
    Checks the URL for parameters passed, namely from the home page, to
    associate with a specific match to load the data from the match as
    the user redirects from the home page to the matches page
*/
var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

// Grabs the associated value if there is a parameter in the URl called match
var v = params.match;

/*
    If the match is navigated to without a parameter in the link then 
    set the variable to 0 and load the match at position 0 in the match
    object that the data is pulled from
*/
if (!v) {
    var v = 0;
}

// Runs changeMatch on page load depending on parameter redirect or normal page load
changeMatch(v);

// RESOURCE [6] - changeMatch function that populates the data to the  matches.html page
function changeMatch(value) {
    // Grabs the elements and assigns the appropriate value from the matches object
    document.getElementById("team-event").innerHTML = matchesObject[value].event;
    document.getElementById("team-round").innerHTML = matchesObject[value].round;
    document.getElementById("team-h1score").innerHTML = matchesObject[value].team1.score;
    document.getElementById("team-BO").innerHTML = matchesObject[value].bestof;
    document.getElementById("team-h2score").innerHTML = matchesObject[value].team2.score;
    
    // Assign variable to all elements with specific class name
    team1 = document.getElementsByClassName('team-h1')
    team2 = document.getElementsByClassName('team-h2')

    // Loop to update all team names pulled from team1 and team2
    // There will only be 2 to loop through as each match has 2 teams
    for (var h = 0; h < 2; h++)
    {
        team1[h].innerHTML = matchesObject[value].team1.name;
        team2[h].innerHTML = matchesObject[value].team2.name;
    }

    // Assign variable to all elements with specific class name
    team1Names = document.getElementsByClassName('team1-player')
    team2Names = document.getElementsByClassName('team2-player')
    
    // Loop to fill each element with class names from team1Names and team2Names
    // with the player names from each team
    for (var i = 0; i < 5; i++)
    {
        team1Names[i].innerHTML = matchesObject[value].team1["p"+(i+1).toString()];
        team2Names[i].innerHTML = matchesObject[value].team2["p"+(i+1).toString()];
    }

}