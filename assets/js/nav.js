$(function() {
  $('#loading').hide();
  $('body').removeClass("loading");
  $('#main-nav').removeClass("nodisplay");

  (function initialize() {

  })(); // self invoke

  var headerHeight = $(window).height();
  $(window).scroll(function() {
    if($(this).scrollTop() > (headerHeight*.25)) {
      $("#main-nav").css("background-color", "#282d32");
      $("body").css("padding-top", "70px");
    }
    else {
      $("#main-nav").css("background", "transparent");
      $("body").css("padding-top", "0px");
    }

    if($(this).scrollTop() > headerHeight && ($(window).width() > 767)) {
      $("#main-nav-logo:hidden").slideDown();
    }
    else {
      $("#main-nav-logo:visible").slideUp();
    }
  });


  $("#weixinBtn").click( function () {
    $("#weixin-modal").modal('toggle');
  });

  $("#closeWeixinModal").click(function () {
    $("#weixin-modal").modal('toggle');
  });

  $("#resetContact").click(function () {
    $("#contactForm")[0].reset();
  });

  $.validate({
    modules : 'file'
  });

  (function Type() {
    var type0 = new Typed("#el0", {
        strings: ["curl ameh.io"],
        startDelay: 1000,
        typeSpeed: 15, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        cursorChar: '',
        onComplete: function() {$("#element1").show();$("#element2").show();$("#element3").show();} // call function after typing is done
    });
  })();

  $("#navSummaryBtn").click(function (){
    $('html, body').animate({
        scrollTop: ($("#summary").offset().top - 70)
    }, 1250);
  });

  $("#navSkillsBtn").click(function (){
    $('html, body').animate({
        scrollTop: ($("#skills").offset().top - 70)
    }, 1250);
  });

  $("#navResumeBtn").click(function (){
    $('html, body').animate({
        scrollTop: ($("#resume").offset().top - 70)
    }, 1250);
  });

  $("#navContactBtn").click(function (){
    $('html, body').animate({
        scrollTop: ($("#contact").offset().top - 70)
    }, 1250);
  });

  var hasShown = false;
  $(window).scroll(function() {
    function elementScrolled(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top + 300;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if (elementScrolled(".progress") && !hasShown) { $(".progress").show(); hasShown = true; }
  });

  /*var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );*/
});
