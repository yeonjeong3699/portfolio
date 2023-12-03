//visual-container
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

    const aboutTitle = document.querySelector('.about-container > .title-wrapper > .title');
    const aboutText = document.querySelector('.about-container > .title-wrapper > .text-box');
    const aboutProfile = document.querySelector('.profile-wrapper');


    //about-container
    if (scrollY >= visualH / 2) {
        aboutTitle.classList.add('on');

        setTimeout(function () {
            aboutText.classList.add('on');
        }, 400)

        setTimeout(function () {
            aboutProfile.classList.add('on');
        }, 800)
    }
})