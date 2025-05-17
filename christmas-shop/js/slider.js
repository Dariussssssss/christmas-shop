const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');
const sliderContent = document.querySelector('.slider__content');
const pageContainer = document.querySelector('.container');
let currentIndex = 0;
let distanceToMove = 0;
const totalWidth = 1993;


function updateSlider() {
    const offset = -currentIndex * distanceToMove;
    sliderContent.style.transform = `translateX(${offset}px)`;


    buttonLeft.disabled = currentIndex === 0;
    buttonRight.disabled = currentIndex * distanceToMove >= totalWidth - pageContainer.offsetWidth;
}

function updateDistanceToMove() {
    const widthPage = pageContainer.offsetWidth;

    if (widthPage <= 768) {
        let widthPageWithPadding = widthPage - 12;
        distanceToMove = (totalWidth - widthPageWithPadding) / 6;
    } else if (widthPage <= 1024 && widthPage >= 768) {
        let widthPageWithPadding = widthPage - 56;
        distanceToMove = (totalWidth - widthPageWithPadding) / 3;
    } else {
        let widthPageWithPadding = widthPage - 160;
        distanceToMove = (totalWidth - widthPageWithPadding) / 3;
    }
}


buttonLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    }
});


buttonRight.addEventListener('click', () => {
    if (currentIndex * distanceToMove < totalWidth - pageContainer.offsetWidth) {
        currentIndex = Math.min(currentIndex + 1, Math.floor(distanceToMove) - 1);
        updateSlider();
    }
});


window.addEventListener('resize', () => {
    updateDistanceToMove();
    currentIndex = 0;
    updateSlider();
});


updateDistanceToMove();
updateSlider();

