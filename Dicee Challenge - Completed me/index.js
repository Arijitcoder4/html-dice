function rollDice() {
  var randomNumber1 = parseInt(document.getElementById("player1").value);
  var randomNumber2 = parseInt(document.getElementById("player2").value);

  if (
    isNaN(randomNumber1) || isNaN(randomNumber2) ||
    randomNumber1 < 1 || randomNumber1 > 6 ||
    randomNumber2 < 1 || randomNumber2 > 6
  ) {
    alert("Please enter numbers between 1 and 6 for both players.");
    return;
  }

  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");

  image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}
