document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".header__navmenu");
  const hamburger = document.querySelector(".header__hamburger");

  menuToggle.addEventListener("change", function() {
      if (this.checked) {
          navMenu.style.display = "flex";
          setTimeout(() => {
              navMenu.style.opacity = "1";
              navMenu.style.transform = "translateY(0)";
          }, 10);
          hamburger.classList.add("open");
      } else {
          navMenu.style.opacity = "0";
          navMenu.style.transform = "translateY(-10px)";
          setTimeout(() => {
              navMenu.style.display = "none";
          }, 300);
          hamburger.classList.remove("open");
      }
  });
});
// show responsive 
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent click from bubbling up
          this.classList.toggle("open");
      });
  });

  document.addEventListener("click", function () {
      dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
      });
  });
});
// scroll 
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


