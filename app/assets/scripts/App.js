import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/stickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");//the element and the offset to be used in the waypoint
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();