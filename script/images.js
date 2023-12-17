//image click
const imagesItem = document.querySelectorAll('.images-item');

imagesItem.forEach(function (item) {
    const modalWrap = document.querySelector('.modal-wrapper');
    const modalBg = document.querySelector('.modal-bg');
    const modalItem = document.querySelector('.modal-item');
    const modalCloseBtn = document.querySelector('.modal-close-btn');

    item.addEventListener('click', function () {
        if (modalItem.hasChildNodes() == false) {
            const createImage = document.createElement('img');
            modalItem.append(createImage);
            modalItem.firstElementChild.setAttribute('src', item.firstElementChild.src);
        }

        modalWrap.classList.add('on');
        modalBg.classList.add('on');
        modalItem.classList.add('on');
        modalCloseBtn.classList.add('on');

        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('html').style.overflow = 'hidden';
    })

    modalCloseBtn.addEventListener('click', function () {
        if (modalItem.hasChildNodes() == true) {
            const image = modalItem.firstElementChild;
            modalItem.removeChild(image);
            modalItem.scrollTop;
        }

        modalWrap.classList.remove('on');
        modalBg.classList.remove('on');
        modalItem.classList.remove('on');
        modalCloseBtn.classList.remove('on');

        document.querySelector('body').style.overflow = '';
        document.querySelector('html').style.overflow = '';
    })


})
