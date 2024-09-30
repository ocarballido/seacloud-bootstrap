// Load Styles
import '../scss/destinations-caribbean.scss';

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

// Highlight carousel
const highlightsCarousel = new Swiper('#highlights-carousel', {
	slidesPerView: "auto",
	spaceBetween: 16,
	modules: [ Autoplay, Navigation, Pagination ],
});

const toggleClassShowOnQuery = () => {
	const screenWidth = window.innerWidth;

	const accordionsButon = document.querySelectorAll(".accordion-button-form");
	const accordionsBody = document.querySelectorAll(".accordion-collapse-form");

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