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

  // Drift related actions
  if(window.drift){
    window.drift.on('startConversation', function() {ga('send', 'event', 'Drift Widget', 'Chat Started'); });
    window.drift.on('emailCapture', function(data) {ga('send', 'event', 'Drift Widget', 'Email Captured'); });
    window.drift.on('scheduling:meetingBooked', function(data) {ga('send', 'event', 'Drift Widget', 'Meeting Booked'); });
  }

})(jQuery)
