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
// window.addEventListener("scroll", function() {
//   let header = document.querySelector(".header");
//   if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//   } else {
//       header.classList.remove("scrolled");
//   }
// });
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

// /filter 

document.addEventListener("DOMContentLoaded", function () {
  let filterMenu = document.querySelectorAll(".listitemBox");
  let items = document.querySelectorAll(".itemBox");

  filterMenu.forEach(menu => {
      menu.addEventListener("click", function () {
          // Remove active class from all menu items
          filterMenu.forEach(item => item.classList.remove("active"));
          this.classList.add("active");

          let filterValue = this.getAttribute("data-filter");

          items.forEach(item => {
              if (filterValue === "all" || item.getAttribute("data-item") === filterValue) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});

// top upper 
document.getElementById('scrollToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


