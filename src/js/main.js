// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx } from './general.js';

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

// Hero carousel
const heroCarousel = new Swiper('.home-hero-slider', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 750,
	loop: true,
	autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});

// Features carousel
const featuresBg = document.getElementsByClassName('features-bg')
const slidesBg = document.getElementsByClassName('slides-bg')
const featuresBgOpacity = (imageArr, index) => {
	for (let i = 0; i < imageArr.length; i ++) {
		if (i !== index) {
			imageArr[i].style.opacity = 0;
		}
		imageArr[index].style.opacity = 1;
	}
}
console.log(featuresBg)
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

// Common carousel
const commonCarousel = new Swiper('.common-carousel', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 750,
	loop: true,
	// autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});

// Animation scroll
let responsive = gsap.matchMedia();

let sections = gsap.utils.toArray(".slide");

responsive.add("(min-width: 768px)", () => {
	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".horizontal-sliders",
			// pin: true,
			pin: ".main",
			pinSpacing: true,
			scrub: 1,
			start: "center center",
			// end: "bottom 70%",
		}
	});
});