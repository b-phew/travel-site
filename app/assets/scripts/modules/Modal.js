import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//clicking the open modal button
		//use bind to make sure 'this' retains its value inside any associated 
		//(methods like openModal;)
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the X close button
		this.closeModalButton.click(this.closeModal.bind(this));

		//the user pushes any key on the keyboard
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");

		//return false because the header 'get in touch' button is a link element
		//and when assinged a hash sign to not leave the page, its default 
		//behaviour is still to return to the top
		return false

	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;