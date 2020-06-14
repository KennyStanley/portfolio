const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function mobileMenuToggle() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenuToggle);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', mobileMenuToggle);
    
}


$('.smooth-scroll').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top}, 1000);
    }
});