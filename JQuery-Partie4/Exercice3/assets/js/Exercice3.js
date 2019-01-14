$(document).ready(function() {
  $('#submit').on('click', function() {
    var $lastName = $('#lastName').val();
    var $firstName = $('#firstName').val();
    var $mail = $('#mail').val();
    var $phoneNumber = parseInt($('#phoneNumber').val());
    var phoneNumberRegex = /^[0-9]+$/;
    var nameRegex = /^[A-Za-zÂ-ÿ-]+$/;
    var mailRegex = /^[A-Za-z-_.]+[@][A-Za-z-.]+[.][A-Za-z]+$/;

    if(nameRegex.test($firstName) && nameRegex.test($lastName) && mailRegex.test($mail) && phoneNumberRegex.test($phoneNumber)) {
      alert('Bravo! Tu as les félicitations du jury. Tu as bel et bien entré ce qui était attendu.');
    } else {
      alert('Une erreur a été commise! Revois les champs que tu as entré et retente ta chance!')
    }

  });
});
