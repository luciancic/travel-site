const ScrollReveal = require('scrollreveal');
console.log(ScrollReveal);
window.sr = ScrollReveal();

sr.reveal('.item-to-reveal', {duration: 700, easing: 'ease-out', delay: 250});
