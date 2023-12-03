//load
window.addEventListener('load', function () {
    const visualText01 = document.querySelector('.visual-text01');
    const visualText02 = document.querySelector('.visual-text02');
    const visualText03 = document.querySelector('.visual-text03');

    const aboutTitle = document.querySelector('.about-container > .title-wrapper > .title');
    const aboutText = document.querySelector('.about-container > .title-wrapper > .text-box');
    const aboutProfile = document.querySelector('.profile-wrapper');

    const innerWidth = window.innerWidth;


    visualText01.classList.add('on');

    setTimeout(function () {
        visualText02.classList.add('on');
    }, 400)

    setTimeout(function () {
        visualText03.classList.add('on');
    }, 800)

    if (innerWidth <= 1024) {
        setTimeout(function () {
            aboutTitle.classList.add('on');
        }, 1200)

        setTimeout(function () {
            aboutText.classList.add('on');
        }, 1600)

        setTimeout(function () {
            aboutProfile.classList.add('on');
        }, 2000)
    }
})

//scroll
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    const visualH = document.querySelector('.visual-container').offsetHeight;
    const aboutH = document.querySelector('.about-container').offsetHeight;
    const skillsH = document.querySelector('.skills-container').offsetHeight;

    //about
    if (scrollY >= visualH / 3) {
        const aboutTitle = document.querySelector('.about-container > .title-wrapper > .title');
        const aboutText = document.querySelector('.about-container > .title-wrapper > .text-box');
        const aboutProfile = document.querySelector('.profile-wrapper');

        aboutTitle.classList.add('on');

        setTimeout(function () {
            aboutText.classList.add('on');
        }, 400)

        setTimeout(function () {
            aboutProfile.classList.add('on');
        }, 800)
    }

    //skills
    if (scrollY >= visualH + (aboutH / 3)) {
        const skillsContainer = document.querySelector('.skills-container');
        const skillsTitle = document.querySelector('.skills-container > .title-wrapper > .title');
        const skillsText = document.querySelector('.skills-container > .title-wrapper > .text-box');
        const skillsItem = document.querySelector('.skill-wrapper');

        skillsContainer.classList.add('on');

        setTimeout(function () {
            skillsTitle.classList.add('on');
        }, 400)

        setTimeout(function () {
            skillsText.classList.add('on');
        }, 800)

        setTimeout(function () {
            skillsItem.classList.add('on');
        }, 1200)
    }

    //project
    if (scrollY >= visualH + aboutH + (skillsH / 3)) {
        const projectTitle = document.querySelector('.project-container > .title-wrapper > .title');
        const projectText = document.querySelector('.project-container > .title-wrapper > .text-box');
        const projectItem01 = document.querySelector('.item01');
        const projectItem02 = document.querySelector('.item02');
        const projectItem03 = document.querySelector('.item03');
        const projectItem04 = document.querySelector('.item04');
        const slideBtn = document.querySelector('.slide-btn-wrapper');

        projectTitle.classList.add('on');

        setTimeout(function () {
            projectText.classList.add('on');
        }, 400)

        setTimeout(function () {
            projectItem01.classList.add('on');
        }, 800)

        setTimeout(function () {
            projectItem02.classList.add('on');
        }, 1000)

        setTimeout(function () {
            projectItem03.classList.add('on');
        }, 1200)

        setTimeout(function () {
            projectItem04.classList.add('on');
        }, 1400)

        setTimeout(function () {
            slideBtn.classList.add('on');
        }, 1800)
    }
})

//swiper
const projectSlide = new Swiper('.project-slide', {
    slidesPerView: 1.5,
    spaceBetween: 40,
    centeredSlides: true,
    navigation: {
        prevEl: '.slide-btn-left',
        nextEl: '.slide-btn-right',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2, spaceBetween: 30, centeredSlides: false
        },
        1025: {
            slidesPerView: 3, spaceBetween: 20, centeredSlides: false
        },
        1401:{
            slidesPerView: 4, spaceBetween: 20, centeredSlides: false
        }
    }
})