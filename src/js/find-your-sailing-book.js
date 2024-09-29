// Load Styles
import '../scss/find-your-sailing-book.scss';

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
const sailImageCarousel = new Swiper('.sail-image-carousel', {
	slidesPerView: 1,
	spaceBetween: 0,
	modules: [ Autoplay, Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const toggleClassShowOnQuery = () => {
	const screenWidth = window.innerWidth;

	const accordionForm = document.getElementById("accordionForm");

	const accordionsButon = accordionForm.querySelectorAll(".accordion-button");
	const accordionsBody = accordionForm.querySelectorAll(".accordion-collapse");

	for (let i = 0; i < accordionsBody.length; i++) {
		const buttonEl = accordionsButon[i];
		const bodyEl = accordionsBody[i];
	
		// Check if the screen width is smaller than 768px
		if (screenWidth < 768) {
			// Add the "show" class
			if (bodyEl.classList.contains('show')) {
				buttonEl.classList.remove("collapsed");
				bodyEl.classList.add("show");
			}
			buttonEl.classList.add("collapsed");
			bodyEl.classList.remove("show");
		} else {
			// Remove the "show" class
			if (bodyEl.classList.contains('show')) {
				buttonEl.classList.add("collapsed");
				bodyEl.classList.remove("show");
			}
			buttonEl.classList.remove("collapsed");
			bodyEl.classList.add("show");
		}
	}
}

toggleClassShowOnQuery();
window.addEventListener("resize", toggleClassShowOnQuery);