// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

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

// Hero carousel
const heroCarousel = new Swiper('.home-hero-slider', {
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
	// slidesPerView: 4,
	slidesPerView: "auto",
	spaceBetween: 16,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});

// Copyright
const dateEl = document.getElementById('year');
const currentYear = new Date().getFullYear();
dateEl.textContent = currentYear;