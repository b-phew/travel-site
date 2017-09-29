import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.hideInitially();
		this.offsetPercentage = offset;
		this.createWayPoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWayPoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				/* each waypoint object needs 2 properties(element- handler) */
				element: currentItem,//the DOM element we want to watch for.
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},//what we want to happen when the element is scrolled to.
				offset: that.offsetPercentage
			});
		})
	}
}

export default RevealOnScroll;