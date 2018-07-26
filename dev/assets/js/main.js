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

(function () {
    function Slideshow(element) {
        if(document.querySelector(element)) {
            this.el = document.querySelector(element);
            this.init();
        }
        else {
            return
        }
    }

    Slideshow.prototype = {
        init: function () {
                if(screen.width<1279){
            this.slides = this.el.querySelectorAll(".mySlides");
            this.slidesNext = this.el.querySelector(".next");
            this.slidesPrev = this.el.querySelector(".prev");
            this.index = 0;
            this.timer = null;
            this.action();
            this.stopStart();
                }
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
        next: function () {
            var self = this;
            self.index++;
            if (self.index == self.slides.length) {
                self.index = 0;
            }
            self._slideTo(self.index);
        },
        prev: function () {
            var self = this;
            if(self.index == 0){
                self.index = self.slides.length;
            }
            self.index--;
            self._slideTo(self.index);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;
                if(self.slidesNext){
self.slidesNext.addEventListener('click', function () {
    self.next();
});
self.slidesPrev.addEventListener('click', function () {
    self.prev();
});}
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

// banner script ends
