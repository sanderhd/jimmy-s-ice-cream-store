const currentYear = document.getElementById("js_current_year");
const currentDate = new Date();

currentYear.innerHTML = currentDate.getFullYear();

// Scroll naar boven
let scrollButton = document.getElementById("js_back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
    console.log("ja" + document.body.scrollTop + " " + document.documentElement.scrollTop);
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome
}