let slideIndex = 0;

const showSlides = () => {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  // setTimeout(showSlides, 10000); // Change image every 10 seconds
};

const prevSlide = () => {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
};
const nextSlide = () => {
  showSlides();
};

showSlides();
