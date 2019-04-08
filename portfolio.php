<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once "templates/head.php"; ?>
</head>
<body>
	<div class="portfolio_wrap">
		<?php require_once "templates/preloader.php"; ?>
		<header>			
			<?php require_once "templates/header.php"; ?>
		</header>
		<main id="content">
			<div id="wrapper">
            <h1>welcome to KirilMats <span>Portfolio</span></h1>
            <div id="main_wrapper">
                <div id="gallery">
                    <ul id="imagesList">
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/1.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/2.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/3.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/4.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/5.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/6.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/7.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li class="images_li">
                            <div class="image"><img src="dist/img/Portfolio/8.jpg" alt="gallery image"></div>
                            <div class="caption">
                                <img src="dist/img/Portfolio/comment_icon.png" alt="comments">
                                <label class="caption_comment_counter_label"></label>
                                <img src="dist/img/Portfolio/like_icon.png" alt="likes">
                                <label class="caption_like_counter_label"></label>
                                <img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes">
                                <label class="caption_dislike_counter_label"></label>
                            </div>
                        </li>
                        <li id="form_wrapper">
                            <form id="imageUpload_form" action="#" method="post" enctype="multipart/from-data">
                                <label><input type="file" id="imageUpload" accept="image/jpeg,image/png,image/gif" multiple><span>+</span></label>
                                <p>Add your picture</p>
                            </form>
                        </li>
                    </ul>
                </div>
                <div id="popUpWrapper">
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