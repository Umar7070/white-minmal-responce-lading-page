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
      $(".header__navbar").css("background-color", "white");
    } else {
      $(".logo").css("color", "");
      $(".header__navlink").css("color", "");
      $(".header__navbar").css("background-color", "transparent");
    }
  });
});





// images slider 

// let index = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const slider = document.getElementById("slider");

// function updateSlider() {
//     slider.style.transform = `translateX(-${index * (150 + 20)}px)`;
// }

// function nextSlide() {
//     index = (index + 1) % totalSlides;
//     updateSlider();
// }

// function prevSlide() {
//     index = (index - 1 + totalSlides) % totalSlides;
//     updateSlider();
// }

// setInterval(nextSlide, 1000);


// bottum slider 
document.getElementById('scrollToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
