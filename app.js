const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlide = 0, timeOut = 300) {
    slides[activeSlide].classList.add('active');
    slides.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            setTimeout(changeAction, timeOut)
        })
        function changeAction() {
            slides.forEach((el) => el.classList.remove('active'))
            slide.classList.add('active')
        }
    })
}

slidesPlugin(1, 100)

