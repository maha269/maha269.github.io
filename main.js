
$(document).ready(function(){
$(document).on("scroll", function () {
 var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("fadeInRight")
      $(tag).addClass("animated")

    } else {
      $(tag).removeClass("fadeInRight")
    }
   /* if($(".icons").position().top <= pageBottom){
  	$(".icons").addClass("zoomIn");
    $(".icons").addClass("animated")
  }
  else{
  	$(".icons").removeClass("zoomIn");  	
  }*/
  }
  
})
});
