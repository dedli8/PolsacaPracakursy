// language script starts
const langPanel = document.getElementsByClassName("language-panel")[0];
function changeLang(e) {
    if (e.target.classList.contains('language-item-active') && e.target.classList.contains('language-item')){
        return
    }
    else if (e.target.classList.contains('language-item')){
        e.target.parentElement.firstElementChild.classList.remove("language-item-active");
        e.target.parentElement.lastElementChild.classList.remove("language-item-active");
        e.target.classList.add("language-item-active");
    }
}
langPanel.addEventListener('click', changeLang);
// language script ends

// banner script starts

// banner autoplay script starts
(function () {
    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.slides = this.el.querySelectorAll(".mySlides");
            this.index = 0;
            this.timer = null;
            this.action();
            this.stopStart();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.display = "block";
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.display = "none";
                }
            }
        },
        action: function () {
            var self = this;
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 3000);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;

            }, false);
            self.el.addEventListener("mouseout", function () {
                self.action();

            }, false);
        }

    };

    document.addEventListener("DOMContentLoaded", function () {

        var studySlider = new Slideshow(".slideshow-container");
        var coursesSlider = new Slideshow(".slideshow-container2");
    });

})();

// banner autoplay script ends

// banner buttons prev and next script

var slideIndex = 1;
var sliderCont = '';
// showSlides(slideIndex);

function plusSlides(e, n) {
    sliderCont = e.target;
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slidesItem = sliderCont.parentElement.getElementsByClassName("mySlides");
    if (n > slidesItem.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesItem.length
    }
    for (i = 0; i < slidesItem.length; i++) {
        slidesItem[i].style.display = "none";
    }
    slidesItem[slideIndex - 1].style.display = "block";
}

// banner buttons script ends

// banner script ends