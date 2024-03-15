document.addEventListener("DOMContentLoaded", function(){
    
    //Show the home page by default
    document.getElementById("home").style.display = "block";

    //add event listeners to navbar links

    //get all routes
    var links = document.querySelectorAll("nav a");

    //for each link element in links, add an event listener
    //when event listener gets activated with click, for that element get the page id and showPage
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            var pageId = event.target.getAttribute("href").substring(1);
            showPage(pageId);
        });
    });

});

function showPage(pageId){
    //Hide all pages
    var pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    //Show requested page
    document.getElementById(pageId).style.display = "block";

}