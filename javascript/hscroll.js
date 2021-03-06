/* START :: Horizontal Scrolling */

  var hscroll = true;
  $(document).on({
    mouseleave: function() {
      hscroll = true;
    },
    mouseenter: function() {
      hscroll = false;
    }
  }, "body > .ui-2, body > #recently-closed-tabs-menu");

  function scrollHorizontal(event) {
    var delta = 0;

    if ( preference.get("disableHscroll") )
      return;

    if ( !event )
      event = window.event;

    if ( event.originalEvent )
      event = event.originalEvent;

    if ( hscroll === false ) {
      if ( event.preventDefault )
        event.preventDefault();

      event.returnValue = false;
      return;
    }

    if ( event.wheelDelta ) {
      delta = event.wheelDelta/120;
    }

    if (delta < 0)
      window.scrollBy(150, 0);
    else if (delta > 0)
      window.scrollBy(-150, 0);

    if ( event.preventDefault )
      event.preventDefault();

    event.returnValue = false;
  }
  $(document).on("mousewheel", scrollHorizontal);

  /* START :: Options Window */

    $(window).bind("antp-config-first-open", function() {
      var option = preference.get("disableHscroll");

      $("#disableHscroll").prop("checked", option);
      $(document).on("change", "#disableHscroll", disableHorizontalScrolling);
    });

    function disableHorizontalScrolling(e) {
      if ( e )
        preference.set("disableHscroll", $(this).is(":checked"));
    }

    /* END :: Options Window */

  /* END :: Horizontal Scrolling */
