// Load Styles
import '../scss/yachts-sea-cloud.scss';

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
const slidesImages = document.getElementsByClassName('postcard-img')
const halfCarousel = new Swiper('.postcard-carousel', {
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

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
});