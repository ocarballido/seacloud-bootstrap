// Load Styles
import '../scss/luxury-sailing-sustainability.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx, featuresBgOpacity } from './general.js';

// Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger)

// import Swiper JS
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

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

const poster2 = document.getElementsByClassName('poster-2-features-bg')
const poster2Mobile = document.getElementsByClassName('poster-2-features-bg-mobile')
const posterCarouse = new Swiper('.poster-carousel-2', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 750,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		activeIndexChange: function() {
			featuresBgOpacity(poster2, this.activeIndex)
			featuresBgOpacity(poster2Mobile, this.activeIndex)
		}
	}
});

const poster3Bg = document.getElementsByClassName('poster-3-features-bg')
const poster3BgMobile = document.getElementsByClassName('poster-3-features-bg-mobile')
const poster3Carousel = new Swiper('.poster-carousel-3', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 750,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		activeIndexChange: function() {
			featuresBgOpacity(poster3Bg, this.activeIndex)
			featuresBgOpacity(poster3BgMobile, this.activeIndex)
		}
	}
});

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
});