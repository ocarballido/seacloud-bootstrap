// Load Styles
import '../scss/about.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright } from './general.js';

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

// Animation scroll
let sections = gsap.utils.toArray(".half-width-item");
let responsive = gsap.matchMedia();

responsive.add("(min-width: 768px)", () => {
	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".half-width-item",
			pin: ".scroll-animation",
			pinSpacing: true,
			start: 'top center',
			scrub: 1,
			end: "bottom 80%",
		}
	});
});