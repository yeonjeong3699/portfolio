window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;
    const imagesHeaderContainer = document.querySelector('.images-header-container');

    if (scrollY > 0) {
        innerWidth <= 768 ? '' : imagesHeaderContainer.classList.add('on');
    } else {
        imagesHeaderContainer.classList.remove('on');
    }
})

const headerTopBtn = document.querySelector('.header-top-btn');

headerTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
})