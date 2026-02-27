// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});


katex.render("\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1", document.getElementById('horizontal'), { displayMode: true });
katex.render("\\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1", document.getElementById('vertical'), { displayMode: true });
katex.render("c^2 = a^2 + b^2", document.getElementById('relation'), { displayMode: true });

katex.render("y - k = \\pm \\frac{b}{a}(x - h)", document.getElementById('horizontal_asymptote'), { displayMode: true });

katex.render("y - k = \\pm \\frac{a}{b}(x - h)", document.getElementById('vertical_asymptote'), { displayMode: true });

var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

// Swiper carousel 2
var swiper = new Swiper(".swiper_2", {
    effect: "cards",
    grabCursor: true,
    autoHeight: false,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    on: {
        init: function () {
            setTimeout(function () {
                equalizeSlideHeights();
            }, 100);
        },
        resize: function () {
            setTimeout(function () {
                equalizeSlideHeights();
            }, 100);
        }
    }
});

function equalizeSlideHeights() {
    let maxHeight = 0;
    const slides = document.querySelectorAll('.swiper_slide_2');

    // Reset heights first
    slides.forEach(slide => {
        slide.style.height = 'auto';
    });

    // Find the tallest slide
    slides.forEach(slide => {
        if (slide.offsetHeight > maxHeight) {
            maxHeight = slide.offsetHeight;
        }
    });

    // Set all slides to the height of the tallest
    if (maxHeight > 0) {
        slides.forEach(slide => {
            slide.style.height = maxHeight + 'px';
        });
    }
}

katex.render("\\frac{(x - 2)^2}{9} - \\frac{(y + 1)^2}{16} = 1", document.getElementById('practice_problem_1'), { displayMode: true });
katex.render("\\frac{(y - 3)^2}{25} - \\frac{(x + 2)^2}{9} = 1", document.getElementById('practice_problem_2'), {displayMode: true});
katex.render("9x^2 - 16y^2 = 144",document.getElementById('practice_problem_3'),{displayMode:true});