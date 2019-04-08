//Header Slider
const headerSlider = function(){
	const $images = $('.slider img'),
		  $next_btn = document.getElementById('next'),
		  $prev_btn = document.getElementById('prev'),
		  time = 1000;

	let i = 0;

	setInterval(nextSlide, time * 5);

	function nextSlide(){
		$($images[i]).fadeOut(time);
		i++;
		if(i >= $images.length){
			i = 0;
			$($images[i]).fadeIn(time);
		}
		$($images[i]).fadeIn(time);
	}
	function prevSlide(){
		$($images[i]).fadeOut(time);
		i--;
		if(i < 0){
			i = $images.length - 1;
			$($images[i]).fadeIn(time);
		}
		$($images[i]).fadeIn(time);
	}
	
	$next_btn.addEventListener('click', nextSlide);
	$prev_btn.addEventListener('click', prevSlide);
};
const checkWidthForSlider = function(){
    let width = $(window).width();
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