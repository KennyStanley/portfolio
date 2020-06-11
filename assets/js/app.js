const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


$('.smooth-scroll').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top}, 1000);
    }
});