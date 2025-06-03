$(function () {

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  $(".pinList").click(function(){
    //$(".pinOL").toggleClass("off");
    //$(this).find("i").toggleClass("bi-x bi-pin-angle");
    //$(".mask").toggleClass("off");
    pinListToggle();
  });
  
  $(".mask").click(function(){
    //$(".pinOL").addClass("off");
    //$(this).hide();
    //$(".pinList").find("i").toggleClass("bi-x bi-pin-angle");
    pinListToggle();
  });
  
  $(".pinOL").click(function(){
    //$(".pinOL").addClass("off");
    //$(".mask").hide();
    //$(".pinList").find("i").toggleClass("bi-x bi-pin-angle");
    pinListToggle();
  });
  
  function pinListToggle(){
    $(".pinOL").toggleClass("off");
    $(".mask").toggleClass("off");
    $(".pinList").find("i").toggleClass("bi-x bi-pin-angle");
  };  
  

  function populatePinList(){
    var pinArr;
    $(".infoTip").each(function( i ) {
      i = i+1;
      var tipNo = "tipNo"+i;
      $(this).attr("id",tipNo);
      var tipName = $(this).find(".infoPointer").attr("pin-title");
      $(".pinOL").find("ol").append('<li><a href="#'+tipNo+'">'+tipName+'</a>')
    });
  };
  populatePinList();
  
  function populateFigureCarousel(){
  //figure carousel
  //find .figure & .figcaption span (name)
  //create li elements within #figure-carousel
    $('.figure').each(function(i){
      i = i+1;
      var idName = "figure"+1;
      $(this).attr("id",idName);
      var name = $(this).find('.figcaption span').text();
      
      $('#figure-carousel').find('ul').append('<li><a href="#'+idName+'">'+name+'</a></li>')
    });
    
  };
  populateFigureCarousel();
  
  var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll < 10) {
			//showTopNav();
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else if (currentScroll <= previousScroll-10) {
        console.log("previousScroll: "+previousScroll);
				showNav();
			}
			previousScroll = currentScroll;
		}
	});
  
	function hideNav() {
		$(".menu").removeClass("is-visible").addClass("is-hidden");
	}

	function showNav() {
		$(".menu").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
	}
  
})
