var app = (function() {
	'use strict';

	function _setUpListeners() {
		var
			search 		= document.getElementById('search-btn'),
			tipLeft 	= document.getElementById('tips-left'),
			tipRight 	= document.getElementById('tips-right'),
			sliderArrow = document.querySelectorAll('.slider__arrow');

		search.onclick 		= _topSearch;
		tipLeft.onclick		= _tipSliderLeft;
		tipRight.onclick 	= _tipSliderRight;
		sliderArrow[0].onclick = _bigSlider;
		sliderArrow[1].onclick = _bigSlider;
	}

//slide down search in header
	function _topSearch(e) {

		if(typeof e !== 'undefined') {
			e.preventDefault();
		}

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
//big slider
	function _bigSlider (e) {
		if(typeof e !== 'undefined') {
			e.preventDefault();
		}
		var 
			firstSlide 	= "../images/first-slide.png",
			secondSlide = "../images/second-slide.png",
			mainImg 	= document.querySelector('.slider'),
			newUrl;

		if( mainImg.style.backgroundImage.search('second') !== -1 ) {
			mainImg.style.backgroundImage = 'url(../images/'+ 'first' + '-slide.png)';
		} else {
			mainImg.style.backgroundImage = 'url(/images/'+ 'second' + '-slide.png)';

		}
	}


//tip slider
	function _tipSliderLeft(e) {

		if(typeof e !== 'undefined') {
			e.preventDefault();
		}

		var
			itemArray 	= document.querySelectorAll('.tips__item'),
			arLen		= itemArray.length,
			i,
			activeTip,
			prevTip;

		for ( i = 0; i < arLen; i++ ) {
			if ( itemArray[i].classList.contains('active') ) {
				activeTip = itemArray[i];
				if( i === 0 ) {
					prevTip = itemArray[arLen-1];
				} else {
					prevTip = itemArray[i-1];
				}
			}
		}

		activeTip.classList.remove('active');
		prevTip.classList.add('active');
	}

	function _tipSliderRight(e) {

		if(typeof e !== 'undefined') {
			e.preventDefault();
		}

		var
			itemArray 	= document.querySelectorAll('.tips__item'),
			arLen		= itemArray.length,
			i,
			activeTip,
			nextTip;

		for ( i = 0; i < arLen; i++ ) {
			if ( itemArray[i].classList.contains('active') ) {
				activeTip = itemArray[i];
				if( i === arLen-1 ) {
					nextTip = itemArray[0];
				} else {
					nextTip = itemArray[i+1];
				}
			}
		}

		activeTip.classList.remove('active');
		nextTip.classList.add('active');
	}

	return {
		init: _setUpListeners
	};
}());

app.init();