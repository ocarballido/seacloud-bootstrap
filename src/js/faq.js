// Load Styles
import '../scss/faq.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright, footerAccordionUx } from './general.js';

// Loading bootstrap with optional features
initBootstrap({
	tooltip: false,
	popover: false,
	toasts: false,
});

appbarScrolled();
copyright();
footerAccordionUx();

const filter = document.getElementById('filter');
const faqsContainers = document.getElementsByClassName('faq-container');
console.log(faqsContainers)

filter.addEventListener('change', () => {
	const filterValue = filter.value;
	const selectedContainer = document.body.querySelector(`.faq-container[data-category="${filterValue}"]`);

	if (filterValue === 'all') {
		for(let i = 0; i < faqsContainers.length; i ++){
			faqsContainers[i].classList.remove('d-none');
		}
	} else {
		for(let i = 0; i < faqsContainers.length; i ++){
			faqsContainers[i].classList.add('d-none');
		}
		selectedContainer.classList.remove('d-none')
	}
})