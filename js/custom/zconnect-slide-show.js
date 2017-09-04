const zconnectSlideshow = (($)=> {

  var TIMEOUT = 2;
  var elementSelector = "#zconnect-slide-show ul";
  var slideSelector = "li"
  var showClass = "show";

  var updateSlides = () => {
    $(elementSelector).each((index, elem) => {
      var slides = $(slideSelector, elem)
      var index = $("."+showClass, elem).length;

      if (index == slides.length){
        index = 0;
        slides.each((i, elem) => {
          $(elem).removeClass(showClass)
        })
      }
      else{
        $(slides[index]).addClass(showClass)
        index += 1;
      }
    })
  }

  if($(elementSelector).length){
      setInterval(updateSlides, TIMEOUT*1000);
  }

})(jQuery)
