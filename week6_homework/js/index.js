$("#did-i-win").hide()

//Declare & Assign Variables
var dieA = 1;
var dieB = 1;

var target = 7;
var numberOfRolls = 0;
var wins = 0;
var losses = 0;
var sumOfRolls = 0;
var lastRoll = 0;

//Handle Events
$('#roll-dice').on('click', function(){

    // Invoke the getRandomNumber function to get a random number
    dieA = getRandomNumber();
    dieB = getRandomNumber();

    // Use the number to set the class of the die which in you can see in the style.css file
    $('#dieA').attr('class', 'dice-' + dieA);
    $('#dieB').attr('class', 'dice-' + dieB);

    // Increment the total number of rolls by 1
    numberOfRolls++;

    // Invoke the checkIfRollIsWinner function to see if 
    var isWinner = checkIfRollIsWinner(dieA, dieB);
    if(isWinner)
    {
        wins++;
    } else {
        losses++;
    }
    console.log(wins, losses);
    lastRoll = dieA + dieB
    sumOfRolls = sumOfRolls + lastRoll
    console.log(numberOfRolls)

    if (numberOfRolls === 10){
        $("#did-i-win").show()
        $("#roll-dice").hide()
    }

        $("#total-rolls").html("Total Rolls: "+numberOfRolls)
    $("#sum-of-rolls").html("Sum of Rolls: "+sumOfRolls)
    $("#last-roll").html("Last Roll: "+lastRoll)

});

$('#did-i-win').on('click', function(){
    console.log("clicked");
    rollZDice();
});

//Declare Functions

function rollZDice(){ 
    if (numberOfRolls > 0) {
    console.log("The sum of all your rolls is "+sumOfRolls+" and last roll was "+lastRoll)
    } else {
        console.log("You gotta roll the dice first dawg")
    }

    if (sumOfRolls != 70) {
        $("#win").html("NICE TRY SON")
        console.log("testerrrr")
    } else if (lastRoll != 7) {
        $("#win").html("So close, but you played yourself")
    } else {
        $("#win").html("Holy shit you won")
    }
}

function getRandomNumber()
{
    return Math.floor((Math.random() * 6) + 1);
}

function checkIfRollIsWinner(dieA, dieB)
{
    // See if the total of dieA and dieB equals the target
    if(dieA + dieB === target)
    {
        return true;
    } else {
        return false;
    }

}
