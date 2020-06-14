

gsap.from('.main-title', {opacity: 0, duration: 1, y: -400, ease: "power2.inOut"});
gsap.from('.main-subtitle', {opacity: 0, duration: 2, delay: 0.6, ease: "power2.inOut"});

gsap.from('.pink.line', {opacity: 0, duration: 4, y: -1000, ease: "power2.inOut"});
gsap.from('.blue.line', {opacity: 0, duration: 3, x: 1000, ease: "power2.inOut"});
gsap.from('.arrow-btn', {opacity: 0, duration: 2, delay: 0.5, y: 200, ease: "power2.inOut"});

// const t1 = new TimelineMax();

// t1.fromTo(".anim-typewriter", 5, { 
//     width: "0"
// }, { 
//     width: "800px",
//     ease:  SteppedEase.config(18) /* Number of characters in string. */
// }, 0)