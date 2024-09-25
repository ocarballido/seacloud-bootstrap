// Load Styles
import '../scss/disclaimer-or-liability.scss';

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