$(document).ready(function() {
  $('#kgs1').on('keyup', function() {
    var kgs1 = +$(this).val();
    var dailyPrice1 = +$(this).closest(".fruit1").data("daily-price1");
    $('#total1').text(kgs1 * dailyPrice1);
    $('#kg1').text($(this).val());
  });
  // add another event handler
});


/*$(document).ready(function(){
  $('#mango').click(function(){
    $('.ui.modal').modal('show');
  });
});
*/
