  var Flipper = (function() {
  // var underlay = $('.underlay');
  var card = $('.underlay');
  var flipper = card.find('.card');
  var win = $('#closeBtn').find('#atras');
  var parrafo = $('.underlay').find('.parrafo');
  var parrafo2 = $('.underlay').find('.parrafo-2');
  $('.parrafo').hide()
   $('#btn-sig').hide();
  


  var flip = function() {
    var thisCard = $(this);
    var thisFlipper = thisCard.find('.card');
     var texto = thisCard.find('.parrafo');
    // var textoSig = card.find('.parrafo-2');
    
    if (card.hasClass('active')) unflip();
        
    thisCard.css({'z-index': '3'}).addClass('active');
    
   
    thisFlipper.css({position: 'absolute'});
    thisFlipper.animate({bottom: "5%"},700);
    thisFlipper.animate({marginBottom: "5%"},700);
    // thisFlipper.animate({left: "10%"},700);
    thisFlipper.animate({width: "50%"},700);
    thisFlipper.animate({width: "70%"},700);
    thisFlipper.animate({height: "850px"},700, function (){
      thisFlipper.stop().animate({height: "95%"},700);
      thisFlipper.css({display: 'none'});
      $('.box-modal').css({display: 'flex'});
      $('#atras').css({visibility: 'visible'})
        thisCard.find('.parrafo').css("display", "block");
    });
    thisCard.off('click');



    if (thisCard.children('.parrafo-2').length > 0){
      $('#btn-sig').show();
       console.log("you can log here");
    } else if (thisCard.children('.parrafo-2').length > 0 === false) {
      $('#btn-sig').hide();
    }

    $("#btn-sig").on("click", function(){
    texto.hide();
    $('.parrafo-2').css({display: 'block'});
    $('#btn-sig').hide();
    $('#btn-atras').css({display: 'block'});
});

    $("#btn-atras").on("click", function(){
      $('.parrafo-2').css({display: 'none'});
      texto.show();
      $('#btn-atras').hide();
      $('#btn-sig').show();
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
    parrafo.css({display: 'none'});
    parrafo2.css({display: 'none'});
    // card.on('click, flip');
    $('.underlay').on('click', flip);
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

