(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

//Carousel
function Carousel(slide_title_content, slide_desc_content) {
	this.slide_title_content = slide_title_content;
	this.slide_desc_conten = slide_desc_content;

	function handlePopUp() {
		var $images = $('.carousel_content').find('figure').find('img');
		var i = 0,
		    $current_image = $images[i];
		$current_image.addEventListener('click', function () {
			Carousel.prototype.createPopUp($current_image);
			Carousel.prototype.openPopUp();
		});
		return $current_image;
	}
}
Carousel.prototype.createPopUp = function (slide_title_content, slide_desc_content, $current_image) {
	var $carousel_pop_up = document.getElementById('carousel_pop_up'),
	    $pop_up = document.createElement('div'),
	    $slide_text = document.createElement('div'),
	    $slide_image = document.createElement('div'),
	    $slide_title = document.createElement('p'),
	    $slide_desc = document.createElement('p'),
	    $close_pop_up = document.createElement('button');
	$pop_up.className = 'pop_up';
	$close_pop_up.id = 'close_pop_up';
	$slide_image.className = 'slide_image';
	$slide_text.className = 'slide_text';
	$slide_desc.className = 'slide_desc';
	$slide_title.className = 'slide_title';
	$slide_image.innerHTML += $current_image;
	$slide_title.innerHTML += slide_title_content;
	$slide_desc.innerHTML += slide_desc_content;
	$slide_text.appendChild($slide_title);
	$slide_text.appendChild($slide_desc);
	$pop_up.appendChild($slide_text);
	$pop_up.appendChild($slide_image);
	$pop_up.appendChild($close_pop_up);
	$carousel_pop_up.appendChild($pop_up);
	console.log($current_image);

	return $pop_up;
};

Carousel.prototype.openPopUp = function () {
	var content = document.querySelector('.page_wrap'),
	    $pop_up = Carousel.prototype.createPopUp();
	content.className += ' shadow';
	$pop_up.className += ' open_pop_up';
};
Carousel.prototype.closePopUp = function () {
	$close_pop_up.addEventListener('click', function () {
		$pop_up.className += ' close_pop_up';
		$pop_up.className -= ' open_pop_up';
		content.className -= ' shadow';
	});
};
var slide1 = new Carousel('First Slide', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est reprehenderit dolore saepe ad consectetur, quisquam quod amet necessitatibus minima! Ducimus consequatur incidunt recusandae quae autem rerum adipisci deserunt porro.');
// console.log(Carousel.prototype);

},{}],2:[function(require,module,exports){
'use strict';

//Custom Header
var customHeader = function () {
	var $header = $('header'),
	    $custom_header_wrap = $header.find('.custom_header_wrap'),
	    $header_wrap = $header.find('.header_wrap'),
	    header_offset = $custom_header_wrap.innerHeight() - $header_wrap.outerHeight(),
	    header_wrap_fixed = 'header_wrap_fixed';

	window.onscroll = function adjustScrollClass() {
		if ($(window).scrollTop() >= header_offset) {
			$header_wrap.addClass(header_wrap_fixed);
		} else {
			$header_wrap.removeClass(header_wrap_fixed);
		}
	};
}();

},{}],3:[function(require,module,exports){
'use strict';

var gallery = function () {
    var images_li = document.getElementsByClassName('images_li');
    var imageUpload = document.getElementById('imageUpload');

    function toUploadImage(e) {
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function () {
                return function (e) {
                    var parentUl = document.getElementById('imagesList');
                    var newLiForImg = document.createElement('li');
                    var newDivForImg = document.createElement('div');
                    var newImg = document.createElement('img');
                    newLiForImg.className = 'images_li';
                    newDivForImg.className = 'image';
                    newImg.file = file;
                    newDivForImg.appendChild(newImg);
                    newLiForImg.appendChild(newDivForImg);
                    parentUl.insertBefore(newLiForImg, parentUl.firstChild);
                    newImg.src = e.target.result;
                    toCreatePopUp(e);
                    toCreateCaption();
                };
            }(file);
            reader.readAsDataURL(file);
        }
    };

    function toCreateCaption() {
        var caption = document.createElement('div');
        caption.className = 'caption';
        caption.innerHTML = '<img src="dist/img/Portfolio/comment_icon.png" alt="comments"><label class="caption_comment_counter_label"></label><img src="dist/img/Portfolio/like_icon.png" alt="likes"><label class="caption_like_counter_label"></label><img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes"><label class="caption_dislike_counter_label"></label>';
        var i = 0;
        images_li[i].appendChild(caption);
        i++;
    };

    function toCreatePopUp(e) {
        var popUp = document.createElement('div');
        popUp.className = "popUp";
        popUp.innerHTML = '<div id="image_block_wrapper"><div class="image_block"><img id="image_block_img" src="' + e.target.result + '" alt=""></div><div class="buttons_wrapper"><button class="dislike_button"><label class="dislike_counter_label"></label></button><button class="like_button"><label class="like_counter_label"></label></button></div></div><div class="comments_block_wrapper"><div class="comments"><ul class = "comment_list"></></div><div class="comments_form"><textarea class="textarea text_area_for_nickname" placeholder="Type your nickname here..." maxlength="24"></textarea><textarea class="textarea text_area_for_comment" placeholder="Write your comment here..." maxlength="200"></textarea><button class="comment_form_button"></button></div><h3>Comments:<label class = "comment_counter_label"></label></h3><button class="toClosePopUp"></button></div>';
        document.getElementById('popUpWrapper').insertBefore(popUp, null);
    };

    function toOpenPopUp(event) {
        var target = event.target;
        while (target != imagesList && target.classList != 'caption') {
            if (target.classList == 'images_li') {
                for (var i = 0; i < images_li.length; i++) {
                    if (images_li[i] == target) {
                        var popUp = document.getElementsByClassName('popUp');
                        popUp[i].style.display = 'flex';
                        var _gallery = document.getElementById('gallery');
                        _gallery.style = 'opacity: 0.15; pointer-events: none';
                    }
                }
            }
            target = target.parentNode;
        }
    }

    function toHandlePopUp(event) {
        var target = event.target,
            popUp = document.getElementsByClassName('popUp'),
            like_button = document.getElementsByClassName('like_button'),
            dislike_button = document.getElementsByClassName('dislike_button');
        while (target != popUpWrapper) {
            if (target.classList == "toClosePopUp") {
                for (var i = 0; i < popUp.length; i++) {
                    var _popUp = document.getElementsByClassName('popUp');
                    _popUp[i].style.display = 'none';
                    var _gallery2 = document.getElementById('gallery');
                    _gallery2.style = 'opacity: 1;';
                }
            } else if (target.className == "like_button") {
                for (var i = 0; i < popUp.length; i++) {
                    if (popUp[i].style.display == "flex") {
                        var like_counter_label = document.getElementsByClassName('like_counter_label'),
                            caption_like_counter_label = document.getElementsByClassName('caption_like_counter_label'),
                            like_count = 0;
                        if (like_count == null) {
                            like_count = 0;
                        }
                        like_count++;
                        if (dislike_button[i].hasAttributes('disabled', 'disabled')) {
                            dislike_button[i].removeAttribute('disabled', 'disabled');
                        }
                        like_button[i].setAttribute('disabled', 'disabled');
                        like_counter_label[i].innerHTML = like_count;
                        caption_like_counter_label[i].innerHTML = like_count;
                        like_button[i].classList.toggle('like_button_clicked');
                        dislike_button[i].classList.remove('dislike_button_clicked');
                    }
                }
            } else if (target.className == "dislike_button") {
                for (var i = 0; i < popUp.length; i++) {
                    if (popUp[i].style.display == "flex") {
                        var dislike_counter_label = document.getElementsByClassName('dislike_counter_label'),
                            caption_dislike_counter_label = document.getElementsByClassName('caption_dislike_counter_label'),
                            dislike_count = 0;
                        if (dislike_count == null) {
                            dislike_count = 0;
                        }
                        dislike_count++;
                        if (like_button[i].hasAttributes('disabled', 'disabled')) {
                            like_button[i].removeAttribute('disabled', 'disabled');
                        }
                        dislike_button[i].setAttribute('disabled', 'disabled');
                        dislike_counter_label[i].innerHTML = dislike_count;
                        caption_dislike_counter_label[i].innerHTML = dislike_count;
                        like_button[i].classList.remove('like_button_clicked');
                        dislike_button[i].classList.toggle('dislike_button_clicked');
                    }
                }
            }
            target = target.parentNode;
        }
    };

    function toHandleComments(event) {
        var target = event.target;
        while (target != main_wrapper) {
            if (target.className == 'comment_form_button') {
                var comment_counter_label = document.getElementsByClassName('comment_counter_label'),
                    caption_comment_counter_label = document.getElementsByClassName('caption_comment_counter_label'),
                    popUp = document.getElementsByClassName('popUp');
                for (var i = 0; i < popUp.length; i++) {
                    if (popUp[i].style.display == "flex") {
                        var d = i;
                        var i1 = i * 2;
                        var i2 = i * 2 + 1;
                    }
                }
                var textarea = document.getElementsByClassName('textarea'),
                    text_area_for_nickname = textarea[i1].value,
                    text_area_for_comment = textarea[i2].value;
                if (text_area_for_nickname == "" || text_area_for_comment == "") {
                    var mess = alert("You haven't entered a comment or nickname");
                } else {
                    var date = new Date();
                    var day = date.getDate();
                    if (day < 10) {
                        day = "0" + date.getDate();
                    }
                    var hours = date.getHours();
                    if (hours < 10) {
                        hours = "0" + date.getHours();
                    }
                    var minutes = date.getMinutes();
                    if (minutes < 10) {
                        minutes = "0" + date.getMinutes();
                    }
                    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    month[date.getMonth()];

                    var li1 = document.createElement('li');
                    li1.innerHTML = "By" + " " + text_area_for_nickname + "<span>" + " " + day + " " + month[date.getMonth()] + " " + hours + ":" + minutes + " " + "PM<span>";
                    li1.className = "author_name";
                    var li2 = document.createElement('li');
                    li2.innerHTML = text_area_for_comment;
                    li2.className = "written_comment";
                    var comment_list = document.getElementsByClassName('comment_list');
                    comment_list[d].appendChild(li1);
                    comment_list[d].appendChild(li2);
                    for (var i = 0; i < popUp.length; i++) {
                        if (popUp[i].style.display == "flex") {
                            comment_counter_label[i].innerHTML = +comment_counter_label[i].innerHTML + 1;
                            caption_comment_counter_label[i].innerHTML = comment_counter_label[i].innerHTML;
                        }
                    }
                }
                textarea[i1].value = "";
                textarea[i2].value = "";
            }
            target = target.parentNode;
        }
    };

    //Event Listeners
    imagesList.addEventListener('click', toOpenPopUp, false);
    popUpWrapper.addEventListener('click', toHandlePopUp, false);
    imageUpload.addEventListener('change', toUploadImage, false);
    main_wrapper.addEventListener('click', toHandleComments, false);
}();

},{}],4:[function(require,module,exports){
'use strict';

//Header Slider
var headerSlider = function headerSlider() {
	var $images = $('.slider img'),
	    $next_btn = document.getElementById('next'),
	    $prev_btn = document.getElementById('prev'),
	    time = 1000;

	var i = 0;

	setInterval(nextSlide, time * 5);

	function nextSlide() {
		$($images[i]).fadeOut(time);
		i++;
		if (i >= $images.length) {
			i = 0;
			$($images[i]).fadeIn(time);
		}
		$($images[i]).fadeIn(time);
	}
	function prevSlide() {
		$($images[i]).fadeOut(time);
		i--;
		if (i < 0) {
			i = $images.length - 1;
			$($images[i]).fadeIn(time);
		}
		$($images[i]).fadeIn(time);
	}

	$next_btn.addEventListener('click', nextSlide);
	$prev_btn.addEventListener('click', prevSlide);
};
var checkWidthForSlider = function () {
	var width = $(window).width();
	if (width >= 991) {
		headerSlider();
	}
}();
// function headerSlider(){

// 	setInterval(nextSlider, 5000);

// 	function nextSlider(){
// 		const $img = $('.slider').find('img'),
// 			$current_img = $('.current'),
// 			current_img_index = $current_img.index(),
// 			next_img_index = current_img_index + 1,
// 			next_img = $img.eq(next_img_index); 

// 		function slideDisappear(){
// 			$current_img.fadeOut(1000);
// 			$current_img.removeClass('current');		
// 			slideAppear();
// 		}
// 		function slideAppear(){
// 			if(next_img_index == $img.last().index() + 1){
// 				$img.first().fadeIn(1000);
// 				$img.first().addClass('current');
// 			}else{
// 				next_img.fadeIn(1000);
// 				next_img.addClass('current');
// 			}
// 		}
// 		slideDisappear();
// 		console.log(current_img_index);
// 	}
// 	function prevSlider(){
// 		const $img = $('.slider').find('img'),
// 			$current_img = $('.current'),
// 			current_img_index = $current_img.index(),
// 			prev_img_index = current_img_index - 1,
// 			prev_img = $img.eq(prev_img_index);

// 		$current_img.fadeOut(1000);
// 		$current_img.removeClass('current');
// 		prev_img.fadeIn(1000);
// 		prev_img.addClass('current');
// 	}
// 	document.getElementById("next").addEventListener('click', nextSlider, false);
// 	document.getElementById("prev").addEventListener('click', prevSlider, false);
// }
// headerSlider();

},{}],5:[function(require,module,exports){
'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var reg = require('./registration.js'),
	    preloader = require('./preloader.js'),
	    custom_header = require('./custom_header.js'),
	    header_slider = require('./header_slider.js'),
	    carousel = require('./carousel.js'),
	    gallery = require('./gallery.js');
});

},{"./carousel.js":1,"./custom_header.js":2,"./gallery.js":3,"./header_slider.js":4,"./preloader.js":6,"./registration.js":7}],6:[function(require,module,exports){
'use strict';

//Preloader
var preloadHandle = function () {
	var $images = document.images,
	    total_images_count = $images.length,
	    loaded_images_count = 0,
	    $percent_display = $('.loader_perc'),
	    $preloader = $('.preloader');

	for (var i = 0; i < total_images_count; i++) {
		var image_clone = new Image();
		image_clone.onload = image_loaded;
		image_clone.onerror = image_loaded;
		image_clone.src = $images[i].src;
	}
	function image_loaded() {
		loaded_images_count++;
		var percent_display_count = (100 / total_images_count * loaded_images_count << 0) + '%';
		$percent_display.html(percent_display_count);

		if (loaded_images_count >= total_images_count) {
			setTimeout(function () {
				if (!$preloader.hasClass('done')) {
					$preloader.addClass('done');
				}
			}, 1000);
		}
	}
}();

},{}],7:[function(require,module,exports){
'use strict';

// Registration 
var registration = function () {
	function User(f, l) {
		this.f = f;
		this.l = l;
		this.print = function () {
			console.log(this.l + ' ' + this.f);
		};
	}
	var user = new User('Ivan', 'Ivanov');
	var print = user.print;
	// function customBind(fn, context, ...args){
	// 	return function(){
	// 		fn.apply(context, args);
	// 	}
	// }
	// customBind(print, user, [])();
	// let newprint = print.bind(user);
	// newprint()
	print.call(user);
}();

},{}]},{},[5])

//# sourceMappingURL=bundle.js.map
