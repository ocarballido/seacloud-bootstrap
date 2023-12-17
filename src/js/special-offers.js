// Load Styles
import '../scss/special-offers.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import { appbarScrolled, copyright } from './general.js';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

appbarScrolled()
copyright()

// Your app code

