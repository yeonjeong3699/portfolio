//visual-container
window.addEventListener('load', function(){
    const visualText01 = document.querySelector('.visual-text01');
    const visualText02 = document.querySelector('.visual-text02');
    const visualText03 = document.querySelector('.visual-text03');

    visualText01.classList.add('on');

    setTimeout(function(){
        visualText02.classList.add('on');
    }, 400)

    setTimeout(function(){
        visualText03.classList.add('on');
    }, 800)

})