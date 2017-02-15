const heroscroll = (function($){


	var elementSelector = ".scrolling-hero-text"
	var index = 0;

	var updateText = function(){
		var elements = $(elementSelector + " ul li").length;
		var height = $(elementSelector + " ul li").first().height();

		index += 1;
		if (index == elements){
			index = 0;
		}
		$(elementSelector + " ul").css("top", "-" + (index * height) + "px");
		setTimeout()
	}

	$(function(){
		if($(elementSelector).length){
			setInterval(updateText, 3000);
		}
	});

})(jQuery);