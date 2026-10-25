// =====================================================
// ROLL THE DICE (runs every time the Roll button is pressed)
// =====================================================
function rollDice() {

  // dice 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0]; //selecting first image

  image1.setAttribute("src", randomImageSource); // image to change randomly


  // dice 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  var randomImageSource2 = "images/" + randomDiceImage2;

  var image2 = document.querySelectorAll("img")[1]; //selecting the second image

  image2.setAttribute("src", randomImageSource2);


  // Shake the dice (the shake itself is in style.css: .rolling)
  shakeDice();


  // if player wins or draws
  // The colours for each result are in style.css (.p1-wins, .p2-wins, .draw)
  // so every new roll starts with clean colours.
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 😁";
    document.body.className = "p1-wins";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 😁";
    document.body.className = "p2-wins";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw🫱🏾‍🫲🏾";
    document.body.className = "draw";
  }

  // Start the background music when the game starts (first roll)
  if (music.paused) {
    playMusic();
  }
}

// Restart the shake animation on every roll
function shakeDice() {
  var container = document.querySelector(".container");
  container.classList.remove("rolling");
  void container.offsetWidth; // tiny trick so the animation can play again
  container.classList.add("rolling");
}

// Roll button
document.querySelector("#rollBtn").addEventListener("click", rollDice);


// =====================================================
// BACKGROUND MUSIC
// The music file is chosen in index.html (<audio id="bgMusic" ...>)
// =====================================================
var music = document.querySelector("#bgMusic");

music.volume = 0.1; // 0 = silent, 1 = full volume

function playMusic() {
  music.play().catch(function () {
    // Blocked by the browser until the first roll, or no music file yet
    console.log("Music will start on the first roll. (Make sure sounds/background-music.mp3 exists.)");
  });
}

// Try to play as soon as the page opens.
// Most browsers block this, so the music then starts on the first roll instead.
playMusic();
