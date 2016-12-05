$(document).ready(function() {
  $('#kgs1').on('keyup', function() {
    var kgs1 = +$(this).val();
    var dailyPrice1 = +$(this).closest(".fruit").data("daily-price1");
    $('#total1').text(kgs1 * dailyPrice1);
    $('#kg1').text($(this).val());
  });
  // add another event handler
});

$(document).ready(function() {
  $('#kgs2').on('keyup', function() {
    var kgs2 = +$(this).val();
    var dailyPrice2 = +$(this).closest(".fruit").data("daily-price2");
    $('#total2').text(kgs2 * dailyPrice2);
    $('#kg2').text($(this).val());
  });
});

$(document).ready(function() {
  $('#kgs3').on('keyup', function() {
    var kgs3 = +$(this).val();
    var dailyPrice3 = +$(this).closest(".fruit").data("daily-price3");
    $('#total3').text(kgs3 * dailyPrice3);
    $('#kg3').text($(this).val());
  });
});

$(document).ready(function() {
  $('#kgs4').on('keyup', function() {
    var kgs4 = +$(this).val();
    var dailyPrice4 = +$(this).closest(".fruit").data("daily-price4");
    $('#total4').text(kgs4 * dailyPrice4);
    $('#kg4').text($(this).val());
  });
});

$(document).ready(function() {
  $('#kgs5').on('keyup', function() {
    var kgs5 = +$(this).val();
    var dailyPrice5 = +$(this).closest(".fruit").data("daily-price5");
    $('#total5').text(kgs5 * dailyPrice5);
    $('#kg5').text($(this).val());
  });
});

$(document).ready(function() {
  $('#kgs6').on('keyup', function() {
    var kgs6 = +$(this).val();
    var dailyPrice6 = +$(this).closest(".fruit").data("daily-price6");
    $('#total6').text(kgs6 * dailyPrice6);
    $('#kg6').text($(this).val());
  });
});
/*$(document).ready(function(){
  $('#mango').click(function(){
    $('.ui.modal').modal('show');
  });
});
*/
