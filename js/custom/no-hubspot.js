

const no_hs_form = (function($){
  // If there's no hubspot forms after the page has loaded,
  // allow any 'no hubspot' messages to be shown
  $(function(){
    if(typeof hbspt == 'undefined' || typeof hbspt.forms == 'undefined'){
      $('.no-hubspot').css('display', 'block');
    }
  });

})(jQuery);
