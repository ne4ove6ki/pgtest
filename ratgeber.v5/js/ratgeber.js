function call_cbox($var){
	if($var=="menu"){
		$.colorbox({href:'snippets/modal-box-menu.html',width:'310px',transition:'none'});
	}
	else if($var=="search"){
		$.colorbox({href:'snippets/modal-box-search.html',width:'310px',transition:'none'});
	}
}
(function($){
  //detect the width on page load
  $(document).ready(function(){
    var current_width = $(window).width();
     //do something with the width value here!

    if(current_width < 600){
      jQuery('body').addClass("probably-mobile");
					alert(current_width);
    }
	
	$('a.sshot').colorbox();
  });
  //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
  $(window).resize(function(){
    var current_width = $(window).width();
   //do something with the width value here!
    if(current_width < 600){
      jQuery('body').addClass("probably-mobile");
    }
  });

})(jQuery);
