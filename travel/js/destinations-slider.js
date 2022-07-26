let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("destinations__img-wrapper");
  const dots = document.getElementsByClassName("destinations__slider-button");

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" destinations__slider-button-active-mobile", "");
    dots[i].className = dots[i].className.replace("  destinations__slider-button-active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " destinations__slider-button-active-mobile";
  dots[slideIndex - 1].className += " destinations__slider-button-active";
}