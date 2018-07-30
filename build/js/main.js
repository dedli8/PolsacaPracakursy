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
            this.el = document.querySelector(element);
        if(this.el) {
            this.init();
        }
        else {
            return
        }
    }

    Slideshow.prototype = {
        init: function () {
            this.slides = this.el.querySelectorAll(".mySlides");
            this.slidesNext = this.el.querySelector(".next");
            this.slidesPrev = this.el.querySelector(".prev");
            this.dots = this.el.querySelectorAll(".dot");
            this.dotsContainer = this.el.querySelector(".dots-container");
            this.index = 0;
            this.timer = null;
            // this.stop = 'start';
            if(screen.width<1279){
                this.action();
                this.stopStart();
                // this.stopSlider();
            }
            else if(document.querySelector('.vacancies-slider')){
                this.action();
                this.stopStart();
                // this.stopSlider();
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
            if(self.stop == 'stop'){
                return
            }
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self.changeDots();
                self._slideTo(self.index);

            }, 3000);
        },
        changeDots: function () {
            if (this.dots[0]) {
                var self = this;
                for (i = 0; i < self.dots.length; i++) {
                    self.dots[i].className = self.dots[i].className.replace(" active", "");
                }
                self.dots[self.index].className += " active";
            }
        },
        next: function () {
            var self = this;
            self.index++;
            if (self.index == self.slides.length) {
                self.index = 0;
            }
            self.changeDots();
            self._slideTo(self.index);
        },
        prev: function () {
            var self = this;
            if (self.index==0) {
                self.index = self.slides.length;
            }
            self.index--;
            self.changeDots();
            self._slideTo(self.index);
        },
        // stopSlider:function () {
        //     var self = this;
        //     document.addEventListener('resise', function () {
        //         self.stop = 'stop';
        //         if (screen.width>1279) {
        //             self.stop = 'start';
        //             this.stopStart();
        //             this.stopSlider();
        //         }
        //         else if (document.querySelector('.vacancies-slider')){
        //             self.stop = 'start';
        //             this.stopStart();
        //             this.stopSlider();
        //         }
        //     })
        // },
        stopStart: function () {
            var self = this;
            if(self.stop == 'stop'){
                return
            }
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;
            }, false);
            if(self.slidesNext){
                self.slidesNext.addEventListener('click', function () {
                    self.next();
                });
                self.slidesPrev.addEventListener('click', function () {
                    self.prev();
                });}
            if(self.dotsContainer){
                self.dotsContainer.addEventListener('click', function (e) {
                    self.index = parseInt(e.target.getAttribute('data-index'));
                    self.changeDots();
                    self._slideTo(self.index);
                });
            }
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
