const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const totalSlides = slides.length;

function showSlide(index) {
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});


showSlide(currentIndex);


const preorderSlider = document.querySelector('.preorder-slider');
const preorderSlides = document.querySelectorAll('.preorder-slide');
let preorderIndex = 0;

function showPreorderSlide(index) {
    const offset = index * 100;
    preorderSlider.style.transform = `translateX(-${offset}%)`;
}

document.querySelector('.preorder-prev').addEventListener('click', () => {
    preorderIndex = (preorderIndex === 0) ? preorderSlides.length - 1 : preorderIndex - 1;
    showPreorderSlide(preorderIndex);
});

document.querySelector('.preorder-next').addEventListener('click', () => {
    preorderIndex = (preorderIndex === preorderSlides.length - 1) ? 0 : preorderIndex + 1;
    showPreorderSlide(preorderIndex);
});

showPreorderSlide(preorderIndex);
