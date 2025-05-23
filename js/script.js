document.addEventListener('DOMContentLoaded', function () {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");
    
    if (!multipleCardCarousel) return; // Vérification de sécurité

    if (window.matchMedia("(min-width: 768px)").matches) {
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
            wrap: false,
        });

        const carouselInner = document.querySelector("#carouselExampleControls .carousel-inner");
        if (!carouselInner) return;

        const carouselWidth = carouselInner.scrollWidth;
        const carouselItem = document.querySelector("#carouselExampleControls .carousel-item");
        if (!carouselItem) return;

        const cardWidth = carouselItem.offsetWidth;
        let scrollPosition = 0;

        const nextButton = document.querySelector("#carouselExampleControls .carousel-control-next");
        const prevButton = document.querySelector("#carouselExampleControls .carousel-control-prev");

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    scrollPosition += cardWidth;
                    carouselInner.scroll({ left: scrollPosition, behavior: 'smooth' });
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    carouselInner.scroll({ left: scrollPosition, behavior: 'smooth' });
                }
            });
        }
    } else {
        multipleCardCarousel.classList.add("slide");
    }
});




// const hero = document.querySelector(".hero")
// hero.addEventListener("click", () => {
//     const gradient = generateRandomGradient();
//     hero.style.backgroundImage = gradient;
//   });

//   function generateRandomGradient() {
//     const color1 = randomColor();
//     const color2 = randomColor();
//     const angle = Math.floor(Math.random() * 360);

//     return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
//   }

//   function randomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }