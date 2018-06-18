/*
Description: A simple and fun logic game. Two players count up. Per turn they have to count up either 1, 2 or 3 numbers.
The player who reaches a number 21 or higher first, looses.
*/

//function for random number

function randInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


//Perfect-playing AI

function ai1(aiNumber) {
    var numToReach=gameLimit-1;
    alert("Bot is playing...");
    if (aiNumber != 0 && aiNumber%4 != 0) {
        while (numToReach>aiNumber) {
            numToReach-=4;
        }
        numToReach+=4;
        return numToReach-aiNumber;
    } else {
        if (aiNumber == 20) {
            return 1;
        }
        return randInt(1,3);
    }
}

//Random AI

function ai2(number) {
    var choice = randInt(0,2);
    if (choice < 1) {
        return ai3();
    } else {
        return ai1(number);
    }
}

//Easiest AI

function ai3() {
    alert("Bot is playing...");
    return randInt(1,3);
}

//The player

function player() {
    var playerTurn = 1;
    var correctInput = false;
    while (correctInput == false) {
        var input = prompt("How many steps will you go?", "1, 2, 3"); //ask player by how much he wants to count up
            switch (Number(input)) {
                case 1:
                playerTurn = 1;
                correctInput = true;
                return playerTurn;
                case 2:
                playerTurn = 2;
                correctInput = true;
                return playerTurn;
                case 3:
                playerTurn = 3;
                correctInput = true;
                return playerTurn;
            }
        if (input == null) {
            exit
        } else {
            alert("Please choose 1, 2 or 3!"); //If number is not possible, alert and restart the turn
        }
    }
}

//Some text for the end

function endGame(endnumber, winner) {
    if (endnumber>=gameLimit) {
        if (winner == "ai") {
            alert("Oops. You lost!")
        } else if (winner == "player") {
            alert("Congratulations, you won! Play again if you were lucky and challenge your friends if you know how it's done!")
        }
        var again = confirm("Do you want to play again?");
        if (again) {
            main();
        } else {
            exit();
        }
    }
}

//Choose enemy

function chooseAI() {
    var diff = prompt("Please select difficulty. Leave empty for hardest difficulty", "easy, medium, hard");
    if (diff=="easy" || diff=="medium" || diff=="hard") {
        return diff;
    } else {
        chooseAI();
    }
}

//The AI turn

function ai(difficulty, number) {
    if (difficulty=="easy") {
        return ai3();
    } else if (difficulty=="medium") {
        return ai2(number);
    } else {
        return ai1(number);
    }
}

//The game itself

function main() {
    var difficulty = chooseAI();
    gameLimit = 21;
    while (true) {
        var number = 0;
        var begin = confirm("Do you want to start? Press cancel to let the bot begin");
        if (begin) {
            while (number < gameLimit) {                
                number += player();
                alert("The current number is " + number)
                endGame(number, "ai");
                number += ai(difficulty, number);
                alert("The current number is " + number)
                endGame(number, "player");
            }
        } else {
            while (number < gameLimit) {
                number += ai(difficulty, number);
                alert("The current number is " + number)
                endGame(number, "player");
                number += player();
                alert("The current number is " + number)
                endGame(number, "ai");
            }
        }
    }
}
