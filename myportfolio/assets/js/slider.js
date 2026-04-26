
let slideIndex = 0;
let slideTimer;

function showSlides() 
{
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) 
  {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  slideTimer = setTimeout(showSlides, 4000); 
}

function changeSlide(n) 
{
  clearTimeout(slideTimer);
  slideIndex += n - 1;
  showSlides();
}

function setSlide(n) 
{
  clearTimeout(slideTimer);
  slideIndex = n - 1;
  showSlides();
}

showSlides();

