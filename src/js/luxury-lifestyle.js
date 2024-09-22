// Load Styles
import '../scss/luxury-lifestyle.scss';

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

// Half carousel
const slidesImages = document.getElementsByClassName('carousel-img')
const halfCarousel = new Swiper('#half-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
    speed: 750,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
    on: {
		activeIndexChange: function() {
			featuresBgOpacity(slidesImages, this.activeIndex)
		}
	}
});

// Features carousel
const featuresBg = document.getElementsByClassName('features-bg')
const slidesBg = document.getElementsByClassName('slides-bg')
const featuresCarouselDesktop = new Swiper('.home-features-slider-desktop', {
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
			featuresBgOpacity(featuresBg, this.activeIndex)
			featuresBgOpacity(slidesBg, this.activeIndex)
		}
	}
});

const featuresBgTwo = document.getElementsByClassName('features-bg-two')
const slidesBgTwo = document.getElementsByClassName('slides-bg-two')
const featuresCarouselDesktopTwo = new Swiper('.home-features-slider-desktop-two', {
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
			featuresBgOpacity(featuresBgTwo, this.activeIndex)
			featuresBgOpacity(slidesBgTwo, this.activeIndex)
		}
	}
});

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
	modules: [ Autoplay, Navigation, Pagination ],
});