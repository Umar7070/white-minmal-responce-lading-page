const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // navbar 
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