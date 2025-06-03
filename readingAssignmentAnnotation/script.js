$(function () {
  //$('[data-toggle="popover"]').popover();

  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  });
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  
  //Scroll to show/hide menu code from: https://www.solodev.com/blog/web-design/bootstrap/build-a-fixed-top-navigation-that-disappears-as-users-scroll.stml
  
  var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll < 200) {
			//showTopNav();
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else if (currentScroll <= previousScroll-20) {
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
