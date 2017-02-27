
(($)=> {

  var TIMEOUT = 6;
  var elementSelector = ".slides";
  var slideSelector = ".slide"
  var showClass = "show";

  var updateSlides = () =>{
    $(".slides").each((index, elem) => {
      var slides = $(slideSelector, elem)
      var index = $("."+showClass, elem).index();

      if(index > -1){
        $(slides[index]).removeClass(showClass)
      }

      index += 1;
      if (index == slides.length){
        index = 0;
      }
      $(slides[index]).addClass(showClass)
    })
  }

  if($(elementSelector).length){
      setInterval(updateSlides, TIMEOUT*1000);
  }

})(jQuery)
