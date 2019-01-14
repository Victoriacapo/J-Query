$("#button").click(function(){
  var totalClick = parseInt($("#nombre").val());
  totalClick = totalClick+1;
  $("#nombre").val(totalClick);
  console.log(totalClick);
});
//correction qui fontionne aussi:
//var compteur =0
//$("button").click(function){
//compteur++;                                                          (permet d'ajouter le nombre de click)
//$("compteur").html("nombre de click: "+compteur);                    (.html permet d'acceder à un élément dans html)(voir bibliotheque JQuery)
//});
