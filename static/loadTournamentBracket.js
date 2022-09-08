/*  RESOURCE [8]
    Checks the URL for parameters passed, namely from the home page, to
    associate with a specific event to load the data as
    the user redirects from the home page to the events page
*/
var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

// Grabs the associated value if there is a parameter in the URl called event
var v = params.event;

/*
    If the story is navigated to without a parameter in the link then 
    set the variable to 0 and load the story at position 0 in the event
    object that the data is pulled from
*/
if (!v) {
    var v = 0;
}

// Runs changeEvent on page load depending on parameter redirect or normal page load
changeEvent(v);

// RESOURCE [6] - changeEvent function that populates the data to the event.html page
function changeEvent(value) {
    document.getElementById("ev-tourn-name").innerHTML = eventObject[value].name;

    // Loops through all of the elements that display each of the team names
    // and fills each instance of the team name from the tournament object
    for (var i = 0; i < document.getElementsByClassName("ev-tourn-t1").length; i++)
    {
        document.getElementsByClassName("ev-tourn-t1")[i].innerHTML = eventObject[value].teamList[0]
    }

    for (var i = 0; i < document.getElementsByClassName("ev-tourn-t2").length; i++)
    {
        document.getElementsByClassName("ev-tourn-t2")[i].innerHTML = eventObject[value].teamList[2];
    }

    for (var i = 0; i < document.getElementsByClassName("ev-tourn-t3").length; i++)
    {
        document.getElementsByClassName("ev-tourn-t3")[i].innerHTML = eventObject[value].teamList[3]
    }

    for (var i = 0; i < document.getElementsByClassName("ev-tourn-t4").length; i++)
    {
        document.getElementsByClassName("ev-tourn-t4")[i].innerHTML = eventObject[value].teamList[1]
    }

    // Populates the teams div with the appropriate images of the teams within the tournament
    document.getElementById("ev-t1-img").src = "./static/images/teams/" + eventObject[value].imageList[0];
    document.getElementById("ev-t1-img").alt = eventObject[value].altList[0];
    document.getElementById("ev-t2-img").src = "./static/images/teams/" + eventObject[value].imageList[2];
    document.getElementById("ev-t2-img").alt = eventObject[value].altList[2];
    document.getElementById("ev-t3-img").src = "./static/images/teams/" + eventObject[value].imageList[3];
    document.getElementById("ev-t3-img").alt = eventObject[value].altList[3];
    document.getElementById("ev-t4-img").src = "./static/images/teams/" + eventObject[value].imageList[1];
    document.getElementById("ev-t4-img").alt = eventObject[value].altList[1];

}
