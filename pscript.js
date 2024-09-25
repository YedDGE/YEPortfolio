// When the user scrolls the page, execute myFunction
window.onscroll = function() {myfunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get te offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave scroll position
function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky")
    }
}