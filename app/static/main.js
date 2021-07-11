$(function() {
  console.log('JS está funcionando!'); 
});

$('.entry').on('click', function() {
  var entry = this;
  var post_id = $(this).find('h2').attr('id');
  var result = confirm("Deseja mesmo remover este item?");
  if(result){
  $.ajax({
    type:'GET',
    url: '/delete' + '/' + post_id,
    context: entry,
    success:function(result) {
      if(result.status === 1) {
        $(this).remove();
        console.log(result);
      }
    }
  });
 }
});