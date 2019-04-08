const gallery = function(){
    const images_li = document.getElementsByClassName('images_li');
    const imageUpload = document.getElementById('imageUpload');


    function toUploadImage(e) {
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            const reader = new FileReader();
            reader.onload = (function() {
                return function(e) {
                    const parentUl = document.getElementById('imagesList');
                    const newLiForImg = document.createElement('li');
                    const newDivForImg = document.createElement('div');
                    const newImg = document.createElement('img');
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
            })(file);
            reader.readAsDataURL(file);
        }
    };

    function toCreateCaption() {
        var caption = document.createElement('div');
        caption.className = 'caption';
        caption.innerHTML = '<img src="dist/img/Portfolio/comment_icon.png" alt="comments"><label class="caption_comment_counter_label"></label><img src="dist/img/Portfolio/like_icon.png" alt="likes"><label class="caption_like_counter_label"></label><img src="dist/img/Portfolio/dislike_icon.png" alt="dislikes"><label class="caption_dislike_counter_label"></label>';
        let i = 0;
        images_li[i].appendChild(caption);
        i++;
    };

    function toCreatePopUp(e) {
        const popUp = document.createElement('div');
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
                        const popUp = document.getElementsByClassName('popUp');
                        popUp[i].style.display = 'flex';
                        const gallery = document.getElementById('gallery');
                        gallery.style = 'opacity: 0.15; pointer-events: none';
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
                    const popUp = document.getElementsByClassName('popUp');
                    popUp[i].style.display = 'none';
                    const gallery = document.getElementById('gallery');
                    gallery.style = 'opacity: 1;';
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
                    var li2 = document.createElement('li')
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