//Preloader
const preloadHandle = function(){
	let $images = document.images,
		total_images_count = $images.length,
		loaded_images_count = 0,
		$percent_display = $('.loader_perc'),
		$preloader = $('.preloader');

	for(let i = 0; i < total_images_count; i++ ){
		const image_clone = new Image();
		image_clone.onload = image_loaded;
		image_clone.onerror = image_loaded;
		image_clone.src = $images[i].src;	
	}
	function image_loaded(){
		loaded_images_count++;
		const percent_display_count = (( (100 / total_images_count) * loaded_images_count ) << 0) + '%';
		$percent_display.html(percent_display_count);

		if(loaded_images_count >= total_images_count){
			setTimeout(function(){
				if(!$preloader.hasClass('done')){
					$preloader.addClass('done');
				}
			}, 1000);
		}
	}
}();