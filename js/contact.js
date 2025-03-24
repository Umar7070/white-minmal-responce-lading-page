const hamberguer = document.querySelector(".header__hamburger")
const navmenu = document.querySelector(".header__navmenu")
// console.log(navmenu);
hamberguer.addEventListener("click", () => {
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".header__navlink").forEach((n) => n.addEventListener("click", () => {
  hamberguer.classList.remove("active");
  navmenu.classList.remove("active");
}))


// navbar color changes 


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".logo").css("color", "black");
      $(".header__navlink").css("color", "black");
      $(".header__navbar").css("background-color", "lightgray");
    } else {
      $(".logo").css("color", "");
      $(".header__navlink").css("color", "");
      $(".header__navbar").css("background-color", "transparent");
    }
  });
});

// footer 
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}