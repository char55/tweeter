// take object in data and update part of it

function likes(obj) {
  obj.likes++;
  $('.likes').html(obj.likes);
}

$('.fas fa-heart').click(function(){
  console.log("it lives")
})