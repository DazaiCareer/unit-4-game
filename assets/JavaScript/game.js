
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var targetNumber;
var totalSum;
var wins = 0;
var Losses = 0;

function start() {
    targetNumber= Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(targetNumber);
    crystalValue1= Math.floor(Math.random() * 11) + 1;
    crystalValue2= Math.floor(Math.random() * 11) + 1;
    crystalValue3= Math.floor(Math.random() * 11) + 1;
    crystalValue4= Math.floor(Math.random() * 11) + 1;
    totalSum = 0;
    $("#yourSum").text(totalSum);
}

start();

$("#crystal1").on("click", function() {
totalSum = totalSum + crystalValue1;
console.log(totalSum);
$("#yourSum").text(totalSum);
if (totalSum === targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("you won!");
    start();
} else if (totalSum > targetNumber) {
    losses = losses+1;
    $("#losses").text(losses);
    alert("sorry you lost!");
    start();
}
})
$("#crystal2").on("click", function() {
totalSum = totalSum + crystalValue2;
$("#yourSum").text(totalSum);
if (totalSum === targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("you won!");
    start();
} else if (totalSum > targetNumber) {
    losses++;
    $("#losses").text(losses);
    alert("sorry you lost!");
    start();
}
})
$("#crystal3").on("click", function() {
totalSum = totalSum + crystalValue3;
$("#yourSum").text(totalSum);
if (totalSum === targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("you won!");
    start();
} else if (totalSum > targetNumber) {
    losses++;
    $("#losses").text(losses);
    alert("sorry you lost!");
    start();
}
})
$("#crystal4").on("click", function() {
totalSum = totalSum + crystalValue4;
$("#yourSum").text(totalSum);
if (totalSum === targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("you won!");
    start();
} else if (totalSum > targetNumber) {
    losses++;
    $("#losses").text(losses);
    alert("sorry you lost!");
    start();
}
})


