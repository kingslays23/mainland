
let slideIndexx = 0;
function showlogo() {
  let i;
  let slide = document.querySelectorAll(".carlogo");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slide.length) {
    slideIndexx = 1
  }
  slide[slideIndexx - 1].style.display = "block";
  setTimeout(showlogo, 5000); // Change image every 5 seconds
}
window.onload = showlogo();

var txt = 'Welcome to Mainland Motors....We sell Joy on wheels '; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var init = 0
function typeWriter() {
  if (init < txt.length) {
    document.getElementById("autoinput").innerHTML += txt.charAt(init);
    init++;
    setTimeout(typeWriter, speed);
  }
}
  typeWriter();

  //Testimonial Data
  const testimonials = [
    {
      name: "Innocent 2face",
      job: "Enugu Nigeria",
      testimonial:
        "Nn metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "dynamic Jude",
      job: "Lagos Nigeria",
      testimonial:
        "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jacob Saviour",
      job: "Porthacourt Nigeria",
      testimonial:
        " viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Telsa",
      job: "Anambra state",
      testimonial:
        "Sit laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];

  //Current Slidew
  let i = 0;
  //Total Slides
  let j = testimonials.length;

  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");

  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });

  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p> <br>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;
