<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once "app/templates/head.php"; ?>
</head>
<body>
	<div class="main_page_wrap">
		<?php require_once "app/templates/preloader.php"; ?>
		<header>
			<?php require_once "app/templates/header.php"; ?>
		</header>
		<main id="content">
			<?php require_once "app/templates/bg_strips.php"; ?>
			<div class="reasons_wrap">
			<div class="container">
			<div class="row advantages_wrap">
				<h2 class="col-12"><span>4</span> essential reasons to order site from me</h2>
				<div class="col-12 advantages" id="advantages">
					<div class="advantage"><div class="advantage_title"><h4>Price</h4><span class="price"></span></div><p>The cost of my services is indicated in the corresponding section, but each project is individual and prices may differ drastically. <br> You can be sure that the prices are fully consistent with the quality and market prices. I guarantee 100% working off of your money. Contact me - we will discuss.</p></div>
					<div class="advantage"><div class="advantage_title"><h4>Expirience</h4><span class="experience"></span></div><p>I have been creating websites since 2017. More than 50+ created sites. Check out my portfolio and find that most of the projects are implemented for US customers, and they are very demanding. Despite the huge competition among freelancers, they continue to trust me.</p></div>
					<div class="advantage"><div class="advantage_title"><h4>Quality</h4><span class="quality"></span></div><p>Modern and intuitive design. Clear, clean, valid code that meets all modern standards. Adaptive layout - your website will be displayed correctly on all available devices, from mobile phones to desktops.</p></div>
					<div class="advantage"><div class="advantage_title"><h4>Clear deadlines</h4><span class="clear_deadlines"></span></div><p>After discussing your project and drawing up the TOR, I will write about all the stages of development and clearly mark the time for each stage. You can be sure - the project will be delivered on time. In case of delay due to my fault - a discount is waiting for you! But I doubt that you are so lucky).</p></div>
			</div>
			<button class="quick_order"><a href="contactme.php">Quick Order</a></button>
			</div>
			</div>
			</div>
			<div class="carousel_wrap">
			<div class="container">
				<div class="row">
					<h2 class="last_works">Last works</h2>
					<div class="col-2 carousel">
						<div class="carousel_content">
							<figure><img src="dist/img/Header/1.jpg" alt="web development bg"></figure>
							<figure><img src="dist/img/Header/2.jpg" alt="web development bg"></figure>
							<figure><img src="dist/img/Header/3.jpg" alt="web development bg"></figure>
							<figure><img src="dist/img/Header/4.jpg" alt="web development bg"></figure>
							<figure><img src="dist/img/Header/5.jpg" alt="web development bg"></figure>
						</div>
					</div>
				</div>
				<button class="see_more_portfolio"><a href="portfolio.php">See More</a></button>
			</div>
			</div>
		</main>
		<footer>
			<?php require_once "app/templates/footer.php"; ?>
		</footer>
	</div>
	<div id="carousel_pop_up">
    </div>
	<script type="text/javascript" src="app/js/jquery-2.1.1.min.js" ></script>
	<script type="text/javascript" src='dist/js/bundle.js'></script>
</body>
</html>
