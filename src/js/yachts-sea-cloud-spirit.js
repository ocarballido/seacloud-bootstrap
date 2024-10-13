// Load Styles
import '../scss/yachts-sea-cloud-spirit.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx, featuresBgOpacity } from './general.js';

// Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger)

// import Swiper JS
import Swiper from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

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
const postcardCarousel = new Swiper('.postcard-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
    speed: 750,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Pagination ],
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
	modules: [ Navigation, Pagination ],
});

// Zones Ship carousel
const zonesShipCarousel = new Swiper('.zones-carousel', {
	slidesPerView: "auto",
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Pagination ],
});

// Deck plan Ship carousel
const allLegendItems = document.getElementsByClassName('legend-item');
const slide0Active = document.getElementsByClassName('slide-0-active');
const slide1Active = document.getElementsByClassName('slide-1-active');
const slide2Active = document.getElementsByClassName('slide-2-active');
const slide3Active = document.getElementsByClassName('slide-3-active');

const activeLegend = (index) => {
	for (let i = 0; i < allLegendItems.length; i ++) {
		allLegendItems[i].classList.remove('active');
	}

	let activeChuck = slide0Active;

	if (index === 1) {
		activeChuck = slide1Active;
	} else if (index === 2) {
		activeChuck = slide2Active;
	} else if (index === 3) {
		activeChuck = slide3Active;
	} else {
		activeChuck = slide0Active;
	}

	for (let i = 0; i < activeChuck.length; i ++) {
		activeChuck[i].classList.add('active');
	}
}

const deckCarousel = new Swiper('.deck-carousel', {
	slidesPerView: "auto",
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	on: {
		activeIndexChange: function() {
			activeLegend(this.activeIndex)
		}
	},
	modules: [ Autoplay, Pagination ],
});

const legendDesktop = document.getElementById('legend-desktop');
const legendMobile = document.getElementById('legend-mobile');
const template = document.getElementById('legend-template').content;

legendDesktop.appendChild(template.cloneNode(true));
legendMobile.appendChild(template.cloneNode(true));

// History carousel
const historyCarousel = new Swiper('.history-carousel', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	modules: [ Navigation ],
});