const headerResize = (($)=> {

  function resizeHeaderBackground() {
    /* Resizes the header background to fill the space
       we have after rendering */
    const $angle_bg_elem = $('.solid-angle-bg')
    const offset = $angle_bg_elem.offset().top
    const height = 350; // Magic number based on the angle

    $('#stage').css({
      backgroundSize: 'auto ' + (offset+height) + 'px, auto',
    })

  }
  $(resizeHeaderBackground)
  $(window).resize(resizeHeaderBackground)
})(jQuery)
