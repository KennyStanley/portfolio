

gsap.from('.main-title', {opacity: 0, duration: 2, y: -800, ease: "power2.inOut"});
gsap.from('.main-subtitle', {opacity: 0, duration: 1, delay: 1.7, ease: "power2.inOut"});

gsap.from('.pink.line', {opacity: 0, duration: 2, y: -500, ease: "power2.inOut"});
gsap.from('.blue.line', {opacity: 0, duration: 1.5, x: 700, ease: "power2.inOut"});
gsap.from('.arrow-btn', {opacity: 0, duration: 1, delay: 1.7, y: 300, ease: "power2.inOut"});

// const t1 = new TimelineMax();

// t1.fromTo(".anim-typewriter", 5, { 
//     width: "0"
// }, { 
//     width: "800px",
//     ease:  SteppedEase.config(18) /* Number of characters in string. */
// }, 0)