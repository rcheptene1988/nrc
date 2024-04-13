
// Onscroll add white bg to navbar
let scrollpos = window.scrollY
const header = document.querySelector("header")
const faSearch = document.querySelector(".fa-search");
const mainLogo = document.querySelector("#nrc_logo");
const hamburger = document.querySelector("#hamburger");
const header_height = header.offsetHeight


const add_class_on_scroll = () => {
    mainLogo.src = "/img/nrc-logo-blue.png";
    header.classList.add("header_offset");
    faSearch.classList.add("blue");
    hamburger.classList.add("blue");
}
const remove_class_on_scroll = () => {
    mainLogo.src = "/img/nrc-logo.png";
    header.classList.remove("header_offset")
    faSearch.classList.remove("blue");
    hamburger.classList.remove("blue");

}

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
//   console.log(scrollpos)
})
// END Onscroll add white bg to navbar

// Mobile top menu
// const menu = document.querySelector(".menu");
// const menuMain = menu.querySelector(".menu-main");
// const goBack = menu.querySelector(".go-back");
// const menuTrigger = document.querySelector(".mobile-menu-trigger");
// const closeMenu = menu.querySelector(".mobile-menu-close");
// let subMenu;
// menuMain.addEventListener("click", (e) =>{
//     if(!menu.classList.contains("active")){
//         return;
//     }
//   if(e.target.closest(".menu-item-has-children")){
//        const hasChildren = e.target.closest(".menu-item-has-children");
//      showSubMenu(hasChildren);
//   }
// });
// goBack.addEventListener("click",() =>{
//      hideSubMenu();
// })
// menuTrigger.addEventListener("click",() =>{
//      toggleMenu();
// })
// closeMenu.addEventListener("click",() =>{
//      toggleMenu();
// })
// document.querySelector(".menu-overlay").addEventListener("click",() =>{
//     toggleMenu();
// })
// function toggleMenu(){
//     menu.classList.toggle("active");
//     document.querySelector(".menu-overlay").classList.toggle("active");
// }
// function showSubMenu(hasChildren){
//    subMenu = hasChildren.querySelector(".sub-menu");
//    subMenu.classList.add("active");
//    subMenu.style.animation = "slideDown 0.5s ease forwards";
//    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
//    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
//    menu.querySelector(".mobile-menu-head").classList.add("active");
// }

// function  hideSubMenu(){  
//    subMenu.style.animation = "slideUp 0.5s ease forwards";
//    setTimeout(() =>{
//       subMenu.classList.remove("active");	
//    },300); 
//    menu.querySelector(".current-menu-title").innerHTML="";
//    menu.querySelector(".mobile-menu-head").classList.remove("active");
// }

// window.onresize = function(){
//     if(this.innerWidth >991){
//         if(menu.classList.contains("active")){
//             toggleMenu();
//         }

//     }
// }
// END Mobile top menu

// New Mobile Menu
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideDown 1.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideUp 1.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}
// END New Mobile Menu



// Main Slider
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//  END Main Slider


//  Initialize Swiper 
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      breakpoints: {
        767: {
            slidesPerView: 3,
        },

      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


//  END News Slider



