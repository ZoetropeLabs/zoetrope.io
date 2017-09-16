const headerResize = (($)=> {

  let imageSize = false;

  //Load the background image to get the sizes
  function getImageSize() {
    const bgImage = new Image()
    const img_url = $('#stage').css('background-image').match(/url\(["']?([^"')]*?)["']?\)/)[1]
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

    const $angleBgElem = $('.solid-angle-bg')
    const offset = $angleBgElem.offset().top
    const height = 350; // Magic number based on the angle
    const bgHeight = offset + height


    // If the page is wider than the image, after re-sizing
    // then we should just leave it as a `contain` sized
    // background image which will cover the height more
    // appropriately
    if(pageWidth < (bgHeight * imageSize.aspect) ){
      // In order to make animations work, we need to work out
      // how big the background image is naturally with the
      // contain. This requires working out the container aspect
      // ratio
      // Then once we've set the size numerically, we can animate it
      const contW = $(document).width(),
            imageHeight = contW / imageSize.aspect


      $('#stage').css({
        backgroundSize: 'auto ' + imageHeight + 'px, auto',
      })

      // A set timeout seems to be required in order to allow
      // the animation to start
      setTimeout(() => {

        $('#stage').css({
          backgroundSize: 'auto ' + bgHeight + 'px, auto',
        })
      }, 10)

      console.log("set by height: ", bgHeight)
    }
    else {
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
