/*========== SHOW MENU ==========*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*========== MENU SHOW ==========*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ==========*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // whenever nav-link is clicked, the show-menu class is removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== SWIPER DISCOVER ==========*/
var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
    },
});

/*========== VIDEO ==========*/
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused) {
        //Play Video
        videoFile.play()

        //Change icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        // Pause Video
        videoFile.pause()

        //Change icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    //Video ends, change icon
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// video ends
videoFile.addEventListener('ended', finalVideo)

/*========== SHOW SCROLL UP ==========*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When scroll is higher than 200vh, add show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========== SCROLL SECTIONS ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2800,
    //reset: true,
})

sr.reveal(`.home-data, .home-social__link, .home-info,
           .discover-container,
           .experience-data, .experience-overlay,
           .place-card,
           .sponsor-content,
           .footer-data, .footer-rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal('.about-data, .video-description, .subscribe-description', {
    origin: 'left',
})

sr.reveal('.about-img__overlay, .video-content, .subscribe-form', {
    origin: 'right',
    interval: 100,
})