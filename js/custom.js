$(function()
{
  //////////////////////
  // Portfolio Images //
  //////////////////////
  
  $(".outer").hover(function()
  {
    $(this).children(".inner").animate( {"marginTop": "+=225px"} );
  }, function()
  {
    $(this).children(".inner").animate( {"marginTop": "-=225px"} );
  });

  //////////////////
  // Sliding Form //
  //////////////////
  
  // current position of step/navigation link
  var current = 1;
  
  // sum and save the widths of each one of the steps
  // set the final sum as the total width of the steps element
  var stepsWidth = 0;
  var widths = [];
  $('.step').each(function(i){
    var $step = $(this);
    widths[i] = stepsWidth;
    stepsWidth += $step.width();
  });
  $('.steps').width(stepsWidth);
  
  // when clicking on a navigation link
  // the form slides to the corresponding step
  $('.footer a').bind('click', function(e)
  {
    var $this = $(this);
    var prev = current;
    $this.closest('ul').find('li').removeClass('selected');
    $this.parent().addClass('selected');

    // we store the position of the link
    // in the current variable
    current = $this.parent().index() + 1;
    
    // animate / slide to the next
    // The order of the links in the navigation is the order of the steps
    $('.steps').stop().animate({
      marginLeft: '-' + widths[current - 1] + 'px'
    }, 500);

    // e.preventDefault();
  });
});