let slideIndex = 0;
pshowSlides();
svshowSlides();

function pshowSlides() {
  let i;
  let slides = document.getElementsByClassName("pslide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(pshowSlides, 2000);
}

function svshowSlides() {
  let i;
  let slides = document.getElementsByClassName("svslide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(svshowSlides, 2000);
}
