const headerResize = (($)=> {

  function resizeHeaderBackground() {
    /* Resizes the header background to fill the space
       we have after rendering */

    if($(window).width() < 1200){
      const $angle_bg_elem = $('.solid-angle-bg')
      const offset = $angle_bg_elem.offset().top
      const height = 350; // Magic number based on the angle

      $('#stage').css({
        backgroundSize: 'auto ' + (offset+height) + 'px, auto',
      })
    }
    else{
      $('#stage').css({
        backgroundSize: 'contain',
      })
    }

  }
  $(resizeHeaderBackground)
  $(window).resize(resizeHeaderBackground)
})(jQuery)
