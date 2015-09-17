var app = (function(){
	'use strict';

	function _setUpListeners() {
		var
			search = document.getElementsByClassName('buttons__link--search');

		search[0].onclick = _topSearch;

	}

	function _topSearch(e) {
		var
			modal = document.getElementsByClassName('search');
			// console.log(modal[0].classList.contains('active'));
		if(!this.classList.contains('active')) {
			this.classList.add('active');
			modal[0].style.display = 'block';
		} else {
			this.classList.remove('active');
			modal[0].style.display = 'none';
		}
	}

	return {
		init: _setUpListeners
	};
}());

app.init();