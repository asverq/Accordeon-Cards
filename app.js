const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlide = 0) {
    slides[activeSlide].classList.add('active');
    slides.forEach(slide => {
        slide.addEventListener('mouseover', changeAction)
    })
}

function changeAction() {
    slides.forEach((el) => el.classList.remove('active'))
    this.classList.add('active')
}

slidesPlugin(1)
