let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



/*scrool section active links*/
let sections = document.querySelectorAll('Section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHigh;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*= ' + id + ']').classList.add('active');
            });
        };
    });

     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);


     /*==============menu icon remove=======*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};


 /*============Scrol reveal ===========*/
 ScrollReveal({
     /*reset: true,*/
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-contant,  .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contant h1, .about-content h3', { origin: 'left' });
ScrollReveal().reveal('.home-contant p, .about-content p', { origin: 'right' });


 /*============typr js ===========*/
 const typed = new Typed('.multipul-text', {
    strings: ['FULL STACK DEVELOPER', 'HTML CSS JS BULID WEBSITE', 'YOUTUBER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });