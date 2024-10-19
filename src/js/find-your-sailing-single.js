// Load Styles
import '../scss/find-your-sailing-single.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx } from './general.js';

// import Swiper JS
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

appbarScrolled();
copyright();
footerAccordionUx();

// Your app code

// Time carousel
const firstDummyBullet = document.getElementById('first-dummy-bullet');
const lastDummyBullet = document.getElementById('last-dummy-bullet');
console.log(firstDummyBullet)
console.log(lastDummyBullet)
const stepCarousel = new Swiper('.step-swiper', {
	spaceBetween: 0,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 'auto',
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		}
	},
	on: {
		activeIndexChange: function() {
			if (this.activeIndex === 0) {
				firstDummyBullet.classList.add('invisible');
				lastDummyBullet.classList.remove('invisible');
			} else if (this.activeIndex === this.slides.length - 1) {
				firstDummyBullet.classList.remove('invisible');
				lastDummyBullet.classList.add('invisible');
			} else {
				firstDummyBullet.classList.remove('invisible');
				lastDummyBullet.classList.remove('invisible');
			}
		}
	},
});

// Time carousel
const timeCarousel = new Swiper('.content-swiper', {
	spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: stepCarousel,
  },
	modules: [ Navigation, Thumbs ],
});

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	modules: [ Navigation, Pagination ],
});