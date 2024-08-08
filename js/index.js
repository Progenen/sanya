gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true
    });

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    });

    const itemsL = document.querySelectorAll(".gallery__left .gallery__item");
    const symbols = document.querySelectorAll(".hero-question__word--1 span");
    const symbols2 = document.querySelectorAll(".hero-question__word--2 span");
    const heroQdescr = document.querySelector(".hero-question__descr");

    let d = -550;

    let d2 = -550;

    symbols.forEach(element => {
        gsap.fromTo(element, { y: -300, opacity: 0}, { 
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: `${d}`,
                end: `0`,
                scrub: true,
            }
         });

         d += 55;

    });

    symbols2.forEach(element => {
        gsap.fromTo(element, { y: -300, opacity: 0}, { 
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: `${d2}`,
                end: `0`,
                scrub: true,
            }
         });

         d2 += 55;

    });

    gsap.fromTo('.hero-question__descr', {y: -259, opacity: 0}, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.hero-question__descr',
            start: '-850',
            end: `0`,
            scrub: true,
        }
    });

    itemsL.forEach(element => {
        gsap.fromTo(element, { x: -50, opacity: 0}, { 
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: element,
                start: '-850',
                end: '0',
                scrub: true,
            }
         })
    });
}