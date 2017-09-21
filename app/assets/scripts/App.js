import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");//the element and the offset to be used in the waypoint
new RevealOnScroll($(".testimonial"), "60%");