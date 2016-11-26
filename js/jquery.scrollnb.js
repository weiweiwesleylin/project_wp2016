$(document).ready(function() {
  $('#kgs').on('keyup', function() {
    var kgs = +$(this).val();
    var dailyPrice = +$(this).closest(".fruit").data("daily-price");
    $('#total').text(kgs * dailyPrice);
    $('#kg').text($(this).val());
  });
  // add another event handler
});
/*$(document).ready(function(){
  $('#mango').click(function(){
    $('.ui.modal').modal('show');
  });
});
*/
