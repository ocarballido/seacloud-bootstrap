// Load Styles
import '../scss/discover-more-videos.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx } from './general.js';

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

// Your app code
// Welcome video carousel
const welcomeVideosCarousel = new Swiper('#welcome-videos-carousel', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		}
	}
});
// Yatchs video carousel
const yatchsVideosCarousel = new Swiper('#yatchs-videos-carousel', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		}
	}
});
// More video carousel
const moreVideosCarousel = new Swiper('#more-videos-carousel', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		}
	}
});