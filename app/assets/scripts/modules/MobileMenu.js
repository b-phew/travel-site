import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();/* call events method in the constructor so the page is 
		listening as soon as it loads */
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		/* bind(this) can change the this identifier to something other than refering to the object,
		 but in this instance we need it to do just that and not get changed to reference something else. */
	}

	toggleTheMenu() {
		/* the 'this' in the next line does not point to the current object but
		 targets the element its currently working on (in this case a specific div).
		 this is fixed by applying the previous bind statement which stops this feature by making 'this' 
		 refrence the object it is currently refrencing when the bind statement is called */
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

/* the exports or module.exports make the resources 
of the class available to other parts of the program */
export default MobileMenu;