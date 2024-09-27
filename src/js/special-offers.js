// Load Styles
import '../scss/special-offers.scss';

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
// Highlight carousel
const highlightsCarousel = new Swiper('#also-interesting-carousel', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
	breakpoints: {
		992: {
			slidesPerView: 3,
		}
	}
});