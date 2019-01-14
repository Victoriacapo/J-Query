
var winWidth = $(window).width(); //regle la largeur de la fenetre ou se déplace le cube. Permet ainsi de faire revenir le carré, une fois atteint la bordure de l'écran
var winHeight = $(window).height();

$("#forme1").keydown(function(arrow){

  if (arrow.keyCode == 39){//droite
    $(".carre").css("left","+=10");
    if ($(".carre").position().left>=$(window).width()){
      $(".carre").css("left","0")};
}
  if (arrow.keyCode == 38){//haut
    ($(".carre").css("top","-=10"));
    if ($(".carre").position().top>=$(window).height()){
      $(".carre").css("top","0")};
    }

  if (arrow.keyCode == 37){//gauche
    $(".carre").css("left","-=10");
  }

  if (arrow.keyCode == 40){//bas
    $(".carre").css("top","+=10");
  }
});
