//get button
let scrollbttn = document.getElementById("scrollbttn");

//when the viewer or user scrolls down 15px from the top, the button will show
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 5 ||document.documentElement.scrollTop > 10) {
        scrollbttn.style.display = "block";
    }else {
        scrollbttn.style.display = "none";
    }
}

//when viewer/user clicks the button, scroll to top of page

function topFunction() {
    document.documentElement.scrollTop = 0;
}