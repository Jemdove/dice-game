// dice 1
var randomNumber1 = Math.floor(Math.random () * 6) +1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //selecting first image

image1.setAttribute("src", randomImageSource); // image to change randomly


// dice 2
var randomNumber2 = Math.floor(Math.random () * 6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1]; //selecting the secong image

image2.setAttribute("src", randomImageSource2);


// if player wins or draws
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 😁";
    document.querySelector("h1").style.color = "lightblue"; // Change h1 color
    document.body.style.backgroundColor = "#14213d"; // Change page background color
    document.querySelectorAll("p")[0].style.color = "lightblue"; //change color of player text
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 😁"
    document.querySelector("h1").style.color = "salmon";
    document.body.style.backgroundColor = "#3d405b";
    document.querySelectorAll("p")[1].style.color = "salmon";
}
else {
    document.querySelector("h1").innerHTML = "Draw🫱🏾‍🫲🏾"
}

