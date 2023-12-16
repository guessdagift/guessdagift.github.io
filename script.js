function checkGuess(){
  var userGuess = document.getElementByID("userGuess").value;
  var correctAnswer = "Sowing the seeds of love";

  if (userGuess === correctAnswer){
    window.location.href = 'winner.html';
  } else{
    alert("Incorrect guess. Try again!");
  }
}
