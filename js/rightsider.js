// header 
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


// 2 slider 
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}
function prevSlide() {
    showSlide(currentIndex - 1);
}
function nextSlide() {
    showSlide(currentIndex + 1);
}

// footer 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}