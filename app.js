var navbar = document.querySelector('nav');

function toggleClass(){
  var toggl = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

   if(nav.className == "nav no-search"){
     console.log(nav);
     nav.classList.add('mobile-nav');
     toggl.classList.add('is-active');
   }else{
     nav.classList.remove('mobile-nav');
     toggl.classList.remove('is-active');
   }

}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

