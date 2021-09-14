  var Flipper = (function() {
  var card = $('.underlay');
  var flipper = card.find('.card');
  var closeCard = $('#closeBtn').find('#atras');
  var win = $(window);
  var parrafo = $('.underlay').find('.parrafo');
  var parrafo2 = $('.underlay').find('.parrafo-2');
  $('.parrafo').hide()
  
  var flip = function() {
    var thisCard = $(this);
    var thisFlipper = thisCard.find('.card');
    var texto = thisCard.find('.parrafo');
    
    if (card.hasClass('active')) unflip();
        
    thisCard.css({'z-index': '3'}).addClass('active');
    
    $('.box-modal').animate({width: "100%"},700, function() {
      $('.box-modal').css({display: 'flex'});
      $('.box-modal').animate({height: "100vh"},700);
      $('#atras').css({visibility: 'visible'})
      thisCard.find('.parrafo').css("display", "flex");
      $('#presentacion-biografia').hide();
      flipper.hide();
      $('#banner-biografia').css({display: 'none'})
    });
      $(this).off('click');

    if (thisCard.children('.parrafo-2').length > 0){
      $('#btn-sig').show();
    } else if (thisCard.children('.parrafo-2').length > 0 === false) {
      $('#btn-sig').hide();
    }

    $("#btn-sig").on("click", function(){
    texto.hide();
    $('.parrafo-2').css({display: 'flex'});
    $('#btn-sig').hide();
    $('#btn-atras').css({display: 'block'});
    if(thisCard.children('.parrafo-3').length > 0){
        $("#btn-sig").on("click", function(){
        thisCard.find('.parrafo-2').css({display: 'none'});
        thisCard.find('.parrafo-3').css({display: 'flex'});
        $('#btn-sig').hide();
        $('#btn-atras').css({display: 'block'});
        });
     }
});

    $("#btn-atras").on("click", function(){
     // if(thisCard.children('.parrafo-3').length > 0){
      $('.parrafo-2').css({display: 'none'});
      texto.show();
      $('#btn-atras').hide();
      $('#btn-sig').show();;
 }); 
    return false;
  };
  
  var unflip = function(e) {
    card.css({'z-index': '1'}).removeClass('active');
    $('#atras').css({visibility: 'hidden'})
    $('.box-modal').css({display: 'none'});
    parrafo.css({display: 'none'});
    parrafo2.css({display: 'none'});
    $('.parrafo-3').css({display: 'none'});
    flipper.css({display: 'block'});
    flipper.animate({width: '177px' });
    flipper.animate({height: "300px"}).removeClass('active')
    flipper.css({position: 'initial'})
    flipper.animate({right: '0%' });
    flipper.animate({bottom: '0%' });
    $('#presentacion-biografia').show();
    $('.underlay').on('click', flip);
  };
  
  var bindActions = function() {
    card.on('click', flip);
    closeCard.on('click', unflip);
  }
  
  var init = function() {
    bindActions();
  };
  
  return {
    init: init
  };
}());

Flipper.init();