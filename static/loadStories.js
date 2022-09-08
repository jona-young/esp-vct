/*  RESOURCE [8]
    Checks the URL for parameters passed, namely from the home page, to
    associate with a specific story to load the data as
    the user redirects from the home page to the news page
*/
var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

// Grabs the associated value if there is a parameter in the URl called story
var v = params.story;

/*
    If the story is navigated to without a parameter in the link then 
    set the variable to 0 and load the story at position 0 in the story
    object that the data is pulled from
*/
if (!v) {
    var v = 1;
}

// Runs chagneStory on page load depending on parameter redirect or normal page load
changeStory(v);

// RESOURCE [6] - changeStory function that populates the data to the news.html page
function changeStory(value) {
    document.getElementById("story-title").innerHTML = storiesObject[value].title;
    document.getElementById("news-banner").src = storiesObject[value].img1;
    document.getElementById("news-banner").alt = storiesObject[value].alt1;
    document.getElementById("news-subBanner").src = storiesObject[value].img2;
    document.getElementById("news-subBanner").alt = storiesObject[value].alt2;

    document.getElementById("story-text1").innerHTML = storiesObject[value].txt1;
    document.getElementById("story-text2").innerHTML = storiesObject[value].txt2;
    document.getElementById("story-credits").href = storiesObject[value].credit;
}