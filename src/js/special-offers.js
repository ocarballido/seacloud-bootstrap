// Load Styles
import '../scss/special-offers.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright } from './general.js';

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

appbarScrolled()
copyright()

// Your app code
// Also like carousel
const alsoLikeCarousel = new Swiper('#also-like-carousel', {
	// slidesPerView: 4,
	slidesPerView: "auto",
	spaceBetween: 16,
	// centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	modules: [ Autoplay, Navigation, Pagination ],
});
