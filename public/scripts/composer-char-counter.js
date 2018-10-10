console.log('present')

const maxAmt = 140;
$(document).ready(function() {
  // const $counter = $('span.counter')
  $("textarea").on('keyup', function() {
    let count;
    let total;
    const $counter = $(this).siblings('.counter')
    count = $(this).val().length;
    total = maxAmt - count;
    if(total < 0) {
      $counter.css({'color':'red'});
    } else {
      $counter.css({'color':'black'});
    }
    $counter.text(total)
  });

});