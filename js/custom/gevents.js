const gEvents = (function ($) {

  const linkSelector = 'a.btn'
  $(function () {
    if(!!window.ga){
      $(linkSelector).click(function () {
        var elem = $(this)
        var category = 'cta'
        var action = 'click'
        var label = elem.text().trim()

        ga('send', 'event', category, action, label)
      })
    }
  })
 
})(jQuery)
