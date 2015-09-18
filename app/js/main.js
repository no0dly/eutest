var app = (function(){
	'use strict';

	function _setUpListeners() {
		var
			search = document.getElementById('search-btn');
		search.onclick = _topSearch;

	}

	function _topSearch(e) {
		var
			modal = document.getElementById('page-search');
		if(!this.classList.contains('active')) {
			this.classList.add('active');
			modal.style.display = 'block';
		} else {
			this.classList.remove('active');
			modal.style.display = 'none';
		}
	}

	return {
		init: _setUpListeners
	};
}());

app.init();