  $(document).ready(function() {
    $('#imageGallery').lightSlider({
      gallery:true,
      minSlide:1,
      maxSlide:1,
      currentPagerPosition:'left',
	  loop:true
    });
	
	$(".prettyphoto").prettyPhoto({
	   overlay_gallery: false, social_tools: false
	});  
  });
  
  