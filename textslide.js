let sIndex = 1;
showSlides(sIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(sIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(sIndex = n);
}

function showSlides(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides");
  if (n > slides1.length) {sIndex = 1}
  if (n < 1) {sIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }

  slides1[sIndex-1].style.display = "block";
}
 
