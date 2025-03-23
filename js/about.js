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
