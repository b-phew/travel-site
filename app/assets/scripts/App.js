import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/stickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");//the element and the offset to be used in the waypoint
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();