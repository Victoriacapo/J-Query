$("#button1").click(function(){
  if ($("#forme").height()<=100){
    $("#forme").css("height","+=10px");}
    else{
      ($("#forme").css("height","10px"));}
  });


$("#button2").click(function(){
$("#forme").css({"background":"green"});
});

$("#button3").click(function(){
$("#forme").css({"background":"#069"});
});

$("#button4").click(function(){
$("#forme").hide();
});

$("#button5").click(function(){
$("#forme").show();
});
