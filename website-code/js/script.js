console.log("working");
var myCards = 1;

//The controls to make slide go forward or back
function plusSlides(n) {
    showSlide(myCards += n);
}


function currentSlide(n) {
    showSlide(myCards = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("card");
    var dots = document.getElementsByClassName("dot");
    var slideLink = document.getElementsByClassName("link")
    if (n > slides.length) {
        myCards = 1
    }
    if (n < 1) {
        myCards = slides.length
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace(" active", "");
    }
//    for (i = 0; i < slideLink.length; i++) {
//        links[i].style.display = "none";
//    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[myCards - 1].style.display = "block";
    dots[myCards - 1].className += " active";

}
