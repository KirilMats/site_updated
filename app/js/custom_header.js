//Custom Header
const customHeader = function(){
	const $header = $('header'),
		$custom_header_wrap = $header.find('.custom_header_wrap'),
		$header_wrap = $header.find('.header_wrap'),
		header_offset = $custom_header_wrap.innerHeight() - $header_wrap.outerHeight(),
		header_wrap_fixed = 'header_wrap_fixed';

	window.onscroll = function adjustScrollClass(){
		if ($(window).scrollTop() >= header_offset){
			$header_wrap.addClass(header_wrap_fixed);
		}else{
			$header_wrap.removeClass(header_wrap_fixed);
		}
	}
}();