$("#button").click(function(){
  var totalClick = parseInt($("#plus").val());
  totalClick = totalClick+1;
  $("#plus").val(totalClick);
  console.log(totalClick);
});

$("#button1").click(function(){
  var totalClick = parseInt($("#moins").val());
  totalClick = totalClick-1;
  $("#moins").val(totalClick);
  console.log(totalClick);
});
