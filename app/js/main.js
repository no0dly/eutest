// var app = (function() {
// 	'use strict';

// 	function _setUpListeners() {
// 		var
// 			search 		= document.getElementById('search-btn'),
// 			tipLeft 	= document.getElementById('tips-left'),
// 			tipRight 	= document.getElementById('tips-right'),
// 			sliderArrow = document.querySelectorAll('.slider__arrow');

// 		search.onclick 		= _topSearch;
// 		tipLeft.onclick		= _tipSliderLeft;
// 		tipRight.onclick 	= _tipSliderRight;
// 		sliderArrow[0].onclick = _bigSlider;
// 		sliderArrow[1].onclick = _bigSlider;
// 	}

// //slide down search in header
// 	function _topSearch(e) {

// 		if(typeof e !== 'undefined') {
// 			e.preventDefault();
// 		}

// 		var
// 			modal = document.getElementById('page-search');
// 		if(!this.classList.contains('active')) {
// 			this.classList.add('active');
// 			modal.style.display = 'block';
// 		} else {
// 			this.classList.remove('active');
// 			modal.style.display = 'none';
// 		}
// 	}
// //big slider
// 	function _bigSlider (e) {
// 		if(typeof e !== 'undefined') {
// 			e.preventDefault();
// 		}
// 		var 
// 			firstSlide 	= "../images/first-slide.png",
// 			secondSlide = "../images/second-slide.png",
// 			mainImg 	= document.querySelector('.slider'),
// 			newUrl;

// 		if( mainImg.style.backgroundImage.search('second') !== -1 ) {
// 			mainImg.style.backgroundImage = 'url(../images/'+ 'first' + '-slide.png)';
// 		} else {
// 			mainImg.style.backgroundImage = 'url(/images/'+ 'second' + '-slide.png)';

// 		}
// 	}


// //tip slider
// 	function _tipSliderLeft(e) {

// 		if(typeof e !== 'undefined') {
// 			e.preventDefault();
// 		}

// 		var
// 			itemArray 	= document.querySelectorAll('.tips__item'),
// 			arLen		= itemArray.length,
// 			i,
// 			activeTip,
// 			prevTip;

// 		for ( i = 0; i < arLen; i++ ) {
// 			if ( itemArray[i].classList.contains('active') ) {
// 				activeTip = itemArray[i];
// 				if( i === 0 ) {
// 					prevTip = itemArray[arLen-1];
// 				} else {
// 					prevTip = itemArray[i-1];
// 				}
// 			}
// 		}

// 		activeTip.classList.remove('active');
// 		prevTip.classList.add('active');
// 	}

// 	function _tipSliderRight(e) {

// 		if(typeof e !== 'undefined') {
// 			e.preventDefault();
// 		}

// 		var
// 			itemArray 	= document.querySelectorAll('.tips__item'),
// 			arLen		= itemArray.length,
// 			i,
// 			activeTip,
// 			nextTip;

// 		for ( i = 0; i < arLen; i++ ) {
// 			if ( itemArray[i].classList.contains('active') ) {
// 				activeTip = itemArray[i];
// 				if( i === arLen-1 ) {
// 					nextTip = itemArray[0];
// 				} else {
// 					nextTip = itemArray[i+1];
// 				}
// 			}
// 		}

// 		activeTip.classList.remove('active');
// 		nextTip.classList.add('active');
// 	}

// 	return {
// 		init: _setUpListeners
// 	};
// }());



// app.init();


//search activate
var search = (function(){
	'use strict';

	function _addListener(e, type, fn) {

		if( typeof addEventListener !== 'undefined' ) {
			e.addEventListener( type, fn, false);
		} else if ( typeof attachEvent !== 'undefined' ) {
			e.attachEvent( 'on' + type, fn );
		} else {
			e['on' + type] = fn;
		}

	}

	function _setUpListeners() {

		var
			search = document.getElementById('search-btn');

		_addListener( search, 'click', _topSearch, false);
	}

	function _topSearch(e) {

		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		var
			modal 	= document.getElementById('page-search'),
			btn 	= document.getElementById('search-btn');

		if(!btn.classList.contains('active')) {
			btn.classList.add('active');
			modal.style.display = 'block';
		} else {
			btn.classList.remove('active');
			modal.style.display = 'none';
		}
	}


	return {
		init: _setUpListeners
	};
}());

search.init();

//banner slider

var slider = (function(){
	'use strict';

	function _addListener(e, type, fn) {

		if( typeof addEventListener !== 'undefined' ) {
			e.addEventListener( type, fn, false);
		} else if ( typeof attachEvent !== 'undefined' ) {
			e.attachEvent( 'on' + type, fn );
		} else {
			e['on' + type] = fn;
		}

	}

	function _setUpListeners() {

		var
			sliderArrow = document.querySelectorAll('.slider__arrow'),
			length 		= sliderArrow.length,
			i;

		for (i = 0; i < length; i++) {
			_addListener( sliderArrow[i], 'click', _bigSlider );
		}
	}

	function _bigSlider (e) {

		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		var
			container 	= document.querySelector('.slider__list'),
			items 		= container.children,
			itemsLen 	= items.length,
			//"this" is not working with ie8
			that 		= e.srcElement,
			firstItem	= items[0],
			lastItem	= items[itemsLen - 1],
			activeItem,
			nextItem,
			prevItem,
			i;

		for( i = 0; i < itemsLen; i++) {

			if( items[i].classList.contains('active')) {

				activeItem 	= items[i];
				nextItem 	= items[i+1];
				prevItem 	= items[i-1];

			}
		}

		if( that.classList.contains('slider__arrow--right') ) {
			if(nextItem) {

				activeItem.classList.remove('active');
				nextItem.classList.add('active');

			} else {

				activeItem.classList.remove('active');
				firstItem.classList.add('active');

			}
		} else {
			if(prevItem) {

				activeItem.classList.remove('active');
				prevItem.classList.add('active');

			} else {

				activeItem.classList.remove('active');
				lastItem.classList.add('active');

			}
		}

	}

	return {
		init: _setUpListeners
	};
}());

slider.init();

//mini slider
var tipSlider = (function(){
	'use strict';

	function _addListener(e, type, fn) {

		if( typeof addEventListener !== 'undefined' ) {
			e.addEventListener( type, fn, false);
		} else if ( typeof attachEvent !== 'undefined' ) {
			e.attachEvent( 'on' + type, fn );
		} else {
			e['on' + type] = fn;
		}

	}

	function _setUpListeners() {

		var
			tipArrows = document.querySelectorAll('.tips-arrows__link'),
			length 		= tipArrows.length,
			i;

		for (i = 0; i < length; i++) {
			_addListener( tipArrows[i], 'click', _tipSliderAct );
		}
	}


	function _tipSliderAct(e) {

		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		var
			list 		= document.querySelector('.tips__list'),
			items 		= list.children,
			itemsLen 	= items.length,
			//"this" is not working with ie8
			that 		= e.srcElement,
			firstItem	= items[0],
			lastItem	= items[itemsLen - 1],
			activeItem,
			nextItem,
			prevItem,
			i;

		for( i = 0; i < itemsLen; i++) {

			if( items[i].classList.contains('active') ) {

				activeItem 	= items[i];
				nextItem 	= items[i+1];
				prevItem 	= items[i-1];

			}
		}

		if ( that.classList.contains('tips-arrows__link--right') ) {
			if(nextItem) {

				activeItem.classList.remove('active');
				nextItem.classList.add('active');

			} else {

				activeItem.classList.remove('active');
				firstItem.classList.add('active');

			}
		} else {
			if(prevItem) {

				activeItem.classList.remove('active');
				prevItem.classList.add('active');

			} else {

				activeItem.classList.remove('active');
				lastItem.classList.add('active');

			}
		}
	}

	return {
		init: _setUpListeners
	};
}());

tipSlider.init();