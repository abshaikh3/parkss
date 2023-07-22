// jQuery Code
$(document).ready(function() {
    $('.visit').hover(
      function() {
        $('.visit-icon').css({
          "filter": "invert(39%) sepia(99%) saturate(1336%) hue-rotate(87deg) brightness(97%) contrast(91%)"
        });
      },
      function() {
        $('.visit-icon').css({
          "filter": "none"
        });
      }
    );
  
    $('.visit').hover(
      function() {
        $('.visitors').not('.specific-li').css({
          "color": "green"
        });
      },
      function() {
        $('.visitors').not('.specific-li').css({
          "color": ""  
        });
      }
    );
  
    $('.visit').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('#lulu').slideToggle();
    });
  
    $('#lulu').click(function(e){
      e.stopPropagation();
    });
  
    $(document).click(function(){
      if ($('#lulu').is(':visible')) {
        $('#lulu').slideUp();
      }
    });
  
    function toggleMenu() {
      $('.hide-menu-items').slideToggle();
    }
  
    $('.icon-menu').click(function() {
      toggleMenu();
    });
  
    function checkScreenWidth() {
      if ($(window).width() <= 1044) {
        $('.hide-menu-items').hide();
        $('.icon-menu').show();
      } else {
        $('.hide-menu-items').show();
        $('.icon-menu').hide();
      }
    }
  
    checkScreenWidth();
  
    $(window).resize(function() {
      checkScreenWidth();
    });
  });
  
  // JavaScript Code
  function adjustCarouselColumnClass() {
    var screenWidth = $(window).width();
    var carouselCols = $('.carousel-col');
  
    if (screenWidth < 1201) {
      carouselCols.removeClass('col-md-6').addClass('w-100');
    } else {
      carouselCols.removeClass('w-100').addClass('col-md-6');
    }
  }
  
  $(document).ready(function() {
    adjustCarouselColumnClass();
  
    $(window).resize(function() {
      adjustCarouselColumnClass();
    });
  });
  