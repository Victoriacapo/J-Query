$(document).ready(function() {
  $('#submit').on('click', function() {
    var $lastName = $('#lastName').val();
    var $firstName = $('#firstName').val();
    var $mail = $('#mail').val();
    var $dateOfBirth = $('#dateOfBirth').val();
    var $cityOfBirth = $('#cityOfBirth').val();
    var $job = $('#job').val();
    var $entreprise = $('#entreprise').val();
    var nameRegex = /^[A-Za-zÂ-ÿ-]+$/;
    var dateOfBirthRegex = /^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$/;
    var baseRegex = /^[A-Za-zÂ-ÿ- ]+$/;

    if(nameRegex.test($firstName) && nameRegex.test($lastName) && dateOfBirthRegex.test($dateOfBirth) && baseRegex.test($cityOfBirth) && baseRegex.test($entreprise) && baseRegex.test($job)) {
      dateOfBirthSplitted = $dateOfBirth.split('/');
      if(parseInt(dateOfBirthSplitted[0]) <= 31 && parseInt(dateOfBirthSplitted[1]) <= 12 && parseInt(dateOfBirthSplitted[2]) > 1900 && parseInt(dateOfBirthSplitted[2]) < 2018) {
        alert('Youpi!', $firstName + ' ' + $lastName + ', né le ' + $dateOfBirth + ' à ' + $cityOfBirth + ', actuellement ' + $job + ' à ' + $entreprise, 'success');
      } else {
        alert('Oops!', 'Merci de revoir votre date d\'anniversaire!', 'error');
      }
    } else {
      alert('Oops!', 'Une erreur a été commise! Revois les champs que tu as entré et retente ta chance!', 'error');
    }
  });
});
