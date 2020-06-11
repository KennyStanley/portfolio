const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

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