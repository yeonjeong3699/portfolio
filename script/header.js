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

window.addEventListener('scroll', function(){
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;
    const headerContainer = this.document.querySelector('.header-container');

    if (scrollY > 0){
        innerWidth <= 768 ? '' : headerContainer.classList.add('on');
    }else{
        headerContainer.classList.remove('on');
    }
})