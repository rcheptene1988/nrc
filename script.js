
// Onscroll add white bg to navbar
let scrollpos = window.scrollY
const header = document.querySelector("header")
const mainLogo = document.querySelector("#nrc_logo");
const hamburger = document.querySelector("#hamburger");
const header_height = header.offsetHeight


const add_class_on_scroll = () => {
    mainLogo.src = "/img/nrc-logo-blue.png";
    header.classList.add("header_offset");
    hamburger.classList.add("blue");
}
const remove_class_on_scroll = () => {
    mainLogo.src = "/img/nrc-logo.png";
    header.classList.remove("header_offset")
    hamburger.classList.remove("blue");

}

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
});
// END Onscroll add white bg to navbar

// New Mobile Menu
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
let accordion;

if (window.innerWidth < 991) {

menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
      return;

    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
});
closeMenu.addEventListener("click",() =>{
     toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click",() =>{
     toggleMenu();
});
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
}

accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
 accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var iTag = this.getElementsByTagName('i');

    if (panel.style.display === "block") {
      
      panel.style.display = "none";
      iTag[0].classList.remove('fa-minus');
      iTag[0].classList.add('fa-plus');
    } else {
      panel.style.display = "block";
      iTag[0].classList.remove('fa-plus');
      iTag[0].classList.add('fa-minus');
    }
  });
}



// Accordion footer
var accFooter = document.getElementsByClassName("accordionFooter");
var i;

for (i = 0; i < accFooter.length; i++) {
  accFooter[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var iTag = this.getElementsByTagName('i');

    if (panel.style.display === "block") {
      
      panel.style.display = "none";
      iTag[0].classList.remove('fa-minus');
      iTag[0].classList.add('fa-plus');
    } else {
      panel.style.display = "block";
      iTag[0].classList.remove('fa-plus');
      iTag[0].classList.add('fa-minus');
    }
  });
}
// END Accordion footer




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


// Cookie banner
var modal = document.getElementById("ccc");
var acceptBtn = document.getElementById("ccc-recommended-settings");
var btn = document.getElementById("changeSettings");
var cookieWrapperCloseMobile = document.getElementsByClassName("cookie-wrapper")[0];
var manageCookies = document.getElementById("manageCookies");

var close = document.getElementById("ccc-dismiss-button");

btn.onclick = function() {
  modal.style.display = "block";
}
manageCookies.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
  cookieWrapperCloseMobile.style.display = "none";
  manageCookies.style.display = "block";
}

acceptBtn.onclick = function() {
  modal.style.display = "none";
  cookieWrapperCloseMobile.style.display = "none"; 
  manageCookies.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// END Cookie banner



