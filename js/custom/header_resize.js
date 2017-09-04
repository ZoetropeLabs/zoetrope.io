const headerResize = (($)=> {

  let imageSize = false;

  //Load the background image to get the sizes
  function getImageSize() {
    const bgImage = new Image()
    const img_url = $('#stage').css('background-image').match(/url\(["']([^"']*?)["']\)/)[1]
    bgImage.src = img_url
    bgImage.onload = () => {
      imageSize = {
        width: bgImage.width,
        height: bgImage.height,
        aspect: bgImage.width / bgImage.height,
      }
    }
  }

  function resizeHeaderBackground() {
    /* Resizes the header background to fill the space
       we have after rendering */

    const pageWidth = $(window).width()

    if(!imageSize){
      // Try again in 100ms
      setTimeout(resizeHeaderBackground, 100)
      return
    }

    const $angle_bg_elem = $('.solid-angle-bg')
    const offset = $angle_bg_elem.offset().top
    const height = 350; // Magic number based on the angle
    const bgHeight = offset + height

    // If the page is wider than the image, after re-sizing
    // then we should just leave it as a `contain` sized
    // background image which will cover the height more
    // appropriately
    if(pageWidth < (bgHeight * imageSize.aspect) ){
      $('#stage').css({
        backgroundSize: 'auto ' + bgHeight + 'px, auto',
      })
      console.log("set by height: ", bgHeight)
    }
    else{
      $('#stage').css({
        backgroundSize: 'contain',
      })
      console.log("set by width, height: ", bgHeight)
    }

  }

  getImageSize();
  $(resizeHeaderBackground)
  $(window).resize(resizeHeaderBackground)

})(jQuery)
