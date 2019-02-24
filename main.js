
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
function setHalfVolume() {
    var myAudio = document.getElementById("audio");
    myAudio.volume = 0.2;
}

/* new portfolio */

//checks if element it is called on is visible (only checks horizontally
(function($) {
  var $window = $(window);
  
  $.fn.isVisible = function(){
    var $this = $(this),
      Left = $this.offset().left,
      visibleWidth = $window .width();

    return Left < visibleWidth;  
  }
})(jQuery);

(function($){
  var list = $('.portfolio-items'),
      showVisibleItems = function(){
      list.children('.item:not(.falldown)').each(function(el, i){
          var $this = $(this);
          if($this.isVisible()){
            $this.addClass('falldown');
          }
        });
      };
  
  //initially show all visible items before any scroll starts
  showVisibleItems();
  
  //then on scroll check for visible items and show them
  list.scroll(function(){
    showVisibleItems();
  });
  
  //image hover pan effect
  list.on('mousemove','img', function(ev){
      var $this = $(this),
          posX = ev.pageX, 
          posY = ev.pageY,
          data = $this.data('cache');
    //cache necessary variables
        if(!data){
          data = {};
          data.marginTop = - parseInt($this.css('top')),
          data.marginLeft = - parseInt($this.css('left')),
          data.parent = $this.parent('.view'),
          $this.data('cache', data); 
        }

    var originX = data.parent.offset().left,
        originY =  data.parent.offset().top;
    
       //move image
       $this.css({
          'left': -( posX - originX ) / data.marginLeft,
          'top' : -( posY - originY ) / data.marginTop
       }); 
  });
  
  
  list.on('mouseleave','.item', function(e){
    $(this).find('img').css({
      'left': '0', 
      'top' : '0'
    });
  });
  
  list.mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 60);
    
      event.preventDefault();

   });
})(jQuery); 


// Google Maps
var myCenter = new google.maps.LatLng(9.9150603, 122.8321918);

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


});
