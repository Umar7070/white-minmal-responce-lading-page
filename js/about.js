const hamberguer=document.querySelector(".header__hamburger")
const navmenu=document.querySelector(".header__navmenu")
// console.log(navmenu);
hamberguer.addEventListener("click",()=>{
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".header__navlink").forEach((n)=>n.addEventListener("click",()=>{
  hamberguer.classList.remove("active");
  navmenu.classList.remove("active");
}))


// header color changes 
window.addEventListener("scroll", function() {
  let header = document.querySelector(".header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

// navbar color changes 

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".header__navlink").addClass("scrolled");
    } else {
      $(".header__navlink").removeClass("scrolled");
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
