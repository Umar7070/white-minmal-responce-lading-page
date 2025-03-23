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


// navbar color changes

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".header__navbar").css("background" , "blue");
	  }

	  else{
		  $(".header__navbar").css("background" , "#333");  	
	  }
  })
})

// navigate 
// function loadPage(page) {
//   fetch(`pages/${page}.html`)
//       .then(response => response.text())
//       .then(data => {
//           document.getElementById("content").innerHTML = data;
//       })
//       .catch(error => console.error("Error loading the page:", error));
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadPage('home');
// });


// home fiter 
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

