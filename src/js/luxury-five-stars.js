// Load Styles
import '../scss/luxury-five-stars.scss';

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

// Tab
const tabMenu = document.getElementById('fancy-nav')
const imagesArr = document.getElementsByClassName('tab-image')
const tabMenuLinks = document.getElementsByClassName('fancy-link');

tabMenu.addEventListener('mouseover', (event) => {
	const index = Number(event.target.getAttribute('data-number'))

	for (let i = 0; i < tabMenuLinks.length; i ++) {
		tabMenuLinks[i].classList.remove('active')
		if (i === index) {
			tabMenuLinks[i].classList.add('active')
		}
	}

    featuresBgOpacity(imagesArr, index)
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

// Also like carousel
const alsoLikeCarousel = new Swiper('#also-like-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});