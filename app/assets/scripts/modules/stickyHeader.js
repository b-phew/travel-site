import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages= $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		//refresh the waypoints on image load
		//so they play well with the lazy loading module
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		})
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			/* waypoints expects a js native dom element here but we're currently providing 
			a jquery object[] - the element resides in this obect at array position [0] 
			so itstill works */
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;

				//the offest lets each link in the nav to be highlighted  at a different stage
				//(this case: highlight  the nav link while scrolling down at 18% pasty the matching element, 
				//but when scrolling ujp make it so 50% of the element has to have passed my before adding the highlight)
				new Waypoint({
					element: currentPageSection,
					handler: function(direction) {
						if(direction == "down"){
							var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
							that.headerLinks.removeClass("is-current-link");
							$(matchingHeaderLink).addClass("is-current-link");
						}
					},
					offset: "18%"
				});

				new Waypoint({
					element: currentPageSection,
					handler: function(direction) {
						if(direction == "up"){
							var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
							that.headerLinks.removeClass("is-current-link");
							$(matchingHeaderLink).addClass("is-current-link");
						}
					},
					offset: "-50%"
				});
		});
	}
}

export default StickyHeader;