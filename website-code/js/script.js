var myCards = 1;
showSlide(myCards);

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
    if (n > slides.length) {myCards = 1}
    if (n < 1) {myCards = slides.length}
    for (i = 0; i < slides.length; i++) {
        dots[i].className.replace (" active", "");
    }
    slides[myCards - 1].style.display = "block";
    dots[myCards - 1].className += " active";
}