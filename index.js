import { scrollToElement } from './modules/scroll.js';
import { initializeMenu } from './modules/menu.js';
import { initializeSlider } from './modules/slider.js';
import { toggleOverlay } from './modules/overlay.js';
import { openCart, closeCart} from "./modules/cartPopup.js";
import { cartData} from "./modules/cartData.js";
window.scrollToElement = scrollToElement;
window.toggleOverlay = toggleOverlay;
window.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeSlider();
    openCart();
    closeCart();
    cartData();
})
