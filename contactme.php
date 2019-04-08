<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once "templates/head.php"; ?>
</head>
<body>
	<div class="contactme_wrap">
		<?php require_once "templates/preloader.php"; ?>
		<header>			
			<?php require_once "templates/header.php"; ?>
		</header>
		<main id="content">
			<?php require_once "templates/bg_strips.php"; ?>
			<div class="contactme_chapter">
			<div class="container">
			<div class="row">
			<div class="col-12">
				<h2>Contact me</h2>
				<div class="line"></div>
			</div>
			</div>
			</div>
			</div>
			<div class="contactme">
			<div class="container">
			<div class="row">
			<div class="col-12">
				<h3>Looking for a qualified web designer, web developer? Fill out the form and I will reply to you within a few hours.</h3>
				<div class="form_contacts">
					<form method="POST" action="contactme.php">
						<input type="text" name="name" placeholder="Your name">
						<input type="text" name="email" placeholder="Your email">
						<input type="text" name="subject" placeholder="Subject">
						<input type="text" name="msg" placeholder="Your message">
						<input type="hidden" name="date" value="<?php echo date('Y-m-d');?>">
						<input type="hidden" name="time" value="<?php echo time('H:i:s');?>">
						<input type="submit" name="send" value="Send">
						
					</form>
					<div class="contacts">
						<address>Zhytomyr 10020, Ukraine</address>
						<a href="tel:+380(093)1602289" class="tel">+380 (093) 160 22 89</a>
						<a href="mailto:mfkirill7@gmail.com" class="email">mfkirill7@gmail.com</a>
					</div>
				</div>
			</div>
			</div>
			</div>
			</div>
		</main>
		<footer>
			<?php require_once "templates/footer.php"; ?>
		</footer>
	</div>
	<script type="text/javascript" src="src/scripts/jquery-2.1.1.min.js" ></script>
	<script type="text/javascript" src='dist/js/bundle.js'></script>
</body>
</html>
