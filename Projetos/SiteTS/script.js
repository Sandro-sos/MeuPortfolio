document.addEventListener('DOMContentLoaded', function () {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    
    function nextSlide() {
        carouselWrapper.appendChild(carouselWrapper.firstElementChild);
        updateTransformProperty();
    }

    function updateTransformProperty() {
        carouselWrapper.style.transform = 'translateX(' + -carouselWrapper.firstElementChild.offsetWidth + 'px)';
    }

    setInterval(nextSlide, 3000); // Mude o intervalo conforme necessário (em milissegundos)
});
