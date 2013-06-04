$(document).ready(function(){
	/*$('.test').hide();
	var test=$('.test').contents().eq(0).text();
	var test1=$('.test').contents().eq(0).text().remove();
	$('.before').html(test);
	$('.after').html(test1);*/
	var test=$('.info-body').contents().eq(0).text();
	$('.before').html(test);
	
	$('.info-body')
  .contents().eq(0)
  .filter(function() {
    return this.nodeType == 3; //Node.TEXT_NODE
  }).remove();
	$('.info-body').prepend('<div class="divider"></div>');
	$('.infoController').click(function(){
		$(this).closest('.info-block').toggleClass('expanded');
		$(this).closest('.info-block').children('info-body').toggle();
	});
});
