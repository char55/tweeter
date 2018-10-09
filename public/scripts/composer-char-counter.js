console.log('present')

// let i = 140;
let count;
let total;
$(document).ready(function() {
  const $counter = $('span.counter')
  $("textarea").on('keyup', function() {

    count = $(this).val().length;
    total = 140 - count;
    if(total < 0) {
      $counter.css({'color':'red'});
    } else {
      $counter.css({'color':'black'});
    }
    $counter.text(total)
  });

});