$('.video_box_content').parent().click(function () {
  if($(this).children(".video_box_content").get(0).paused){        
  	$(this).children(".video_box_content").get(0).play();   
  	$(this).children(".playpause").fadeOut();
   }else{       
    $(this).children(".video_box_content").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});