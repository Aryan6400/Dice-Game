var randomNummber1 = Math.floor(Math.random()*6)+1;
var newSrc = "images/dice" + randomNummber1 + ".png";
document.querySelector(".img1").setAttribute("src", newSrc);

var randomNummber2 = Math.floor(Math.random()*6)+1;
var newSrc = "images/dice" + randomNummber2 + ".png";
document.querySelector(".img2").setAttribute("src", newSrc);

if(randomNummber1 > randomNummber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNummber1 < randomNummber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}