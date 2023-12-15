const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', function () {
    if (menuIcon.classList.contains('on')) {
        menuIcon.classList.remove('on')
        menuList.classList.remove('on')
    } else {
        menuIcon.classList.add('on');
        menuList.classList.add('on');
    }
})

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;
    const headerContainer = document.querySelector('.header-container');

    if (scrollY > 0) {
        innerWidth <= 768 ? '' : headerContainer.classList.add('on');
    } else {
        headerContainer.classList.remove('on');
    }
})

window.addEventListener('load', function () {
    const menuList01 = document.querySelector('.list01');
    const menuList02 = document.querySelector('.list02');
    const menuList03 = document.querySelector('.list03');
    const menuList04 = document.querySelector('.list04');
    const menuList05 = document.querySelector('.list05');

    const visualH = document.querySelector('.visual-container').offsetHeight;
    const aboutH = document.querySelector('.about-container').offsetHeight;
    const skillsH = document.querySelector('.skills-container').offsetHeight;
    const projectH = document.querySelector('.project-container').offsetHeight;

    menuList01.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })

    menuList02.addEventListener('click', function () {
        window.scrollTo(0, visualH);
    })

    menuList03.addEventListener('click', function () {
        window.scrollTo(0, visualH + aboutH);
    })

    menuList04.addEventListener('click', function () {
        window.scrollTo(0, visualH + aboutH + skillsH);
    })

    menuList05.addEventListener('click', function () {
        window.scrollTo(0, visualH + aboutH + skillsH + projectH);
    })
})