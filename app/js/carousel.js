//Carousel
function Carousel(slide_title_content, slide_desc_content){
	this.slide_title_content = slide_title_content;
	this.slide_desc_conten = slide_desc_content;

	function handlePopUp(){
		const $images = $('.carousel_content').find('figure').find('img');
		let i = 0,
			$current_image = $images[i];
		$current_image.addEventListener('click', function(){
			Carousel.prototype.createPopUp($current_image);
			Carousel.prototype.openPopUp();
		});
		return $current_image;
	}
}
Carousel.prototype.createPopUp = function(slide_title_content, slide_desc_content, $current_image){
	const $carousel_pop_up = document.getElementById('carousel_pop_up'),
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
}

Carousel.prototype.openPopUp = function(){
	const content = document.querySelector('.page_wrap'),
		  $pop_up = Carousel.prototype.createPopUp();
	content.className += ' shadow';
	$pop_up.className += ' open_pop_up';
};
Carousel.prototype.closePopUp = function(){
	$close_pop_up.addEventListener('click', function(){
		$pop_up.className += ' close_pop_up';
		$pop_up.className -= ' open_pop_up';
		content.className -= ' shadow';
	})
}
let slide1 = new Carousel('First Slide', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est reprehenderit dolore saepe ad consectetur, quisquam quod amet necessitatibus minima! Ducimus consequatur incidunt recusandae quae autem rerum adipisci deserunt porro.');
// console.log(Carousel.prototype);