const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click", function(){
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", function(){
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction(){
    navMenu.classList.remove("show-menu")
}

for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", linkAction);
}

// ACCORDION

const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

function accordion(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills-content skills-close";
    }

    if(itemClass === "skills-content skills-close"){
        this.parentNode.className = "skills-content skills-open";
    }
}


for(var s = 0; s < skillsHeader.length; s++){
    skillsHeader[s].addEventListener("click", accordion);
}

// QUALIFICATION TAB
const educationTab = document.getElementById("education");
const workTab = document.getElementById("work");

const education = document.getElementById("education-button");
const work = document.getElementById("work-button");


if(work){
    work.addEventListener("click", function(){
        educationTab.classList.remove("qualification-active");
        workTab.classList.add("qualification-active");
        work.classList.add("qualification-active-button")
        education.classList.remove("qualification-active-button")
    })
}

if(education){
    education.addEventListener("click", function(){
        workTab.classList.remove("qualification-active");
        educationTab.classList.add("qualification-active");
        education.classList.add("qualification-active-button");
        work.classList.remove("qualification-active-button")
    })
}


// SWIPER JS
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop:true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// SERVICES

const modalViews = document.querySelectorAll(".services-modal");
const modalBtns= document.querySelectorAll(".services-button");
const modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function(iteration){
    modalViews[iteration].classList.add("services-modal-open");
}

modalBtns.forEach((modalbtn, iteration) => {
    modalbtn.addEventListener("click", () =>{
        modal(iteration);
    })
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("services-modal-open");
        })
    })
});


// SWIPER TESTIMONIAL
let swiperTestimonial = new Swiper(".testimonial-container", {
    loop:true,
    grabCursor: true,
    spaceBetween: 100,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

console.log(sections)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id')
        const navLink = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');

        console.log(navLink)

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              navLink.classList.add('active-link');
            } else {
              navLink.classList.remove('active-link');
            }
          }
        
    })
}
window.addEventListener('scroll', scrollActive)

/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SHOW SCROLL up */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* DARK LIGHT THEME */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



