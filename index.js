function SetRandomDiceNumber(){
    var dice = Math.floor(Math.random() * 6);
    return (dice + 1);
}

var player1 = document.getElementsByClassName("img1")[0];
var player2 = document.querySelector(".img2");
var results = document.querySelector("h1");
function PrintDiceValue(){
    var player1Dice = SetRandomDiceNumber();
    var player2Dice = SetRandomDiceNumber();

    if(player1Dice === player2Dice)
    {
        results.textContent = "Draw!!🚩";
    }
    else if (player1Dice > player2Dice)
    {
        results.textContent = "🚩Player 1 Win!!!";
    }
    else{
        results.textContent = "🚩Player 2 Win!!!";
    }
    player1.setAttribute("src", "./images/dice"+player1Dice+".png");
    player2.setAttribute("src", "./images/dice"+player2Dice+".png");
}
window.onload = function(){
    PrintDiceValue();
};