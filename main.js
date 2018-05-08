$(window).resize(function () {
  var windowHeight = $( window ).height();
  
  var newHeaderHeight = "calc(100vh - 40px)";
  $('#header').height(newHeaderHeight);
  
  var newContentHeight = "calc(100vh - 40px)";
  $('#mainContent').height(newContentHeight);
  
  $('.container').height("calc(100vh - 16px)");
});


//Used for the Skills bar
$('.skills dd').each(function() {
  $(this).css({
    width: $(this).text() + '%'
  });
});