  var Flipper = (function() {
  var card = $('.underlay');
  var flipper = card.find('.card');
  var win = $('#closeBtn').find('#atras');
  var parrafo = $('div').find('p');
  
  var flip = function() {
    var thisCard = $(this);
    var thisFlipper = thisCard.find('.card');
    
    if (card.hasClass('active')) unflip();
        
    thisCard.css({'z-index': '3'}).addClass('active');
    
    
    thisFlipper.css({position: 'absolute'});
    thisFlipper.animate({bottom: "5%"},700);
    thisFlipper.animate({marginBottom: "5%"},700);
    // thisFlipper.animate({left: "10%"},700);
    thisFlipper.animate({width: "50%"},700);
    thisFlipper.animate({width: "70%"},700);
    thisFlipper.animate({height: "850px"},700, function (){
      // thisFlipper.find('.card-img-top').css({display: 'none'});
      thisFlipper.stop().animate({height: "95%"},700);
       thisFlipper.hide();
      $('.box-modal').css({display: 'flex'});
      $('#atras').css({visibility: 'visible'})

      if ($(".card:nth-child(1)") == true){
        parrafo.append('hola soy un texto');
      } else if ($(".card:nth-child(1)") == true) {
        $('.parrafo').append('hola soy el segundo texto');
      } else {
        return null;
      }
    });

    return false;
  };
  
  var unflip = function(e) {
    card.css({'z-index': '1'}).removeClass('active');
    $('#atras').css({visibility: 'hidden'})
    flipper.show();
    flipper.animate({width: '177px' });
    flipper.animate({height: "300px"}).removeClass('active')
    flipper.css({position: 'initial'})
    flipper.animate({right: '0%' });
    flipper.animate({bottom: '0%' });
    $('.box-modal').css({display: 'none'});
  };
  
  var bindActions = function() {
    card.on('click', flip);
    win.on('click', unflip);
  }
  
  var init = function() {
    bindActions();
  };
  
  return {
    init: init
  };
  
}());

Flipper.init();