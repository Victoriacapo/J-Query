var totalPlayerWin=0;
var totalComputerWin=0;
var winner;

$("#button").click(function(){ // debut fonction click
  // declaration variables
  var random= Math.floor(Math.random()*3);//generateur associé au array du tableau[feuille, pierre, ciseau]
  var choice = $("input[name=choice]:checked").val();
  var computerChoice = arrayChoice[random];


  $("#PC").text(computerChoice);

  if (computerChoice == "Pierre"){  // si computerChoice = Pierre

    if (choice=="Pierre"){
      winner="égalité";
    }
    if (choice=="Feuille"){
      winner="tu as gagné";
      totalPlayerWin++;
    }
    if (choice=="Ciseau"){
    winner="tu as perdu";
    totalComputerWin++;
  }

}//fin choix Pierre


if (computerChoice == "Feuille"){  // si computerChoice = Feuille

  if (choice=="Feuille"){
    winner="égalité";
  }
  if (choice=="Pierre"){
    winner="tu as perdu";
    totalComputerWin++;
  }
  if (choice=="Ciseau"){
    winner="tu as gagné";
    totalPlayerWin++;
  }
}//fin choix Feuille

if (computerChoice == "Ciseau"){  // si computerChoice = Ciseau

  if (choice=="Ciseau"){
    winner="égalité";
  }
  if (choice=="Pierre"){
    winner="tu as gagné";
    totalPlayerWin++;
  }
  if (choice=="Feuille"){
    winner="tu as perdu";
    totalComputerWin++;
  }
}//fin choix Ciseau

$("#winner").text(winner);// associe a lélemnt html <p> pour afficher le gagnant de la manche
$("#Playervictory").text(totalPlayerWin); //associe a l'élemnt html <p> pour afficher le total de victoire du joueur
$("#Computervictory").text(totalComputerWin);//associe a l'élemnt html <p> pour afficher le total de victoire du PC
$("#RateVictory").text(Math.round(totalPlayerWin/(totalPlayerWin+totalComputerWin)*100));//associe a l'élemnt html <p> pour afficher le pourcentage de victoire


});// fin fonction button


var arrayChoice =["Pierre","Feuille","Ciseau"]; //le tableau est déclaré en dehors de la fonction, car je ne veut pas qu'il s'affiche ou se manifeste lors de mon clic.
