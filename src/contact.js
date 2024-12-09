
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        document.querySelector(".header").style.backgroundColor = "white";
      } else {
        document.querySelector(".header").style.backgroundColor = "transparent";
      }
    });
  });
  
