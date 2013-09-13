$(document).ready(fungction() {
	$('.confirmation').on('click', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		});
		$('confirmation').on('mouseenter', 'h3', function() {
			$(this).closest('.confirmation').find('.ticket').slideDown();
