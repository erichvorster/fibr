

const buttons = document.querySelectorAll('.features__button')
const featureContent = document.querySelectorAll('.feature__content');
const featureContainer = document.querySelector('.features__buttons__container');

featureContainer.addEventListener('click', function(e){
    const clicked = (e).target.closest('.features__button')

    if(!clicked) return;

    buttons.forEach(btn => btn.classList.remove)
}) 