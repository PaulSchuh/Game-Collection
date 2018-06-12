/*
Description: A simple and fun logic game. Two players count up. Per turn they have to count up either 1, 2 or 3 numbers.
The player who reaches a number 21 or higher first, looses.
*/

//The computer player

function ai(number) {
    var left = 20%number;
    var aiTurn = 1;
    if (left == 0 || number == 0) {
        var a = Math.random();
        var b = Math.random();
        return aiTurn+a+b;
    }
    //The trick to win is to always be on a number that can be divided by 4
    aiTurn = 4-left;
    return aiTurn;
}

//The player

function player(number) {
    var playerTurn = 1;
    var correctInput = false;
    while (correctInput == false) {
        var input = prompt("How many steps will you go?", "1, 2, 3"); //ask him by how much he wants to count up
        if (input < 4 && input > 0) {
            playerTurn = input;
            correctInput = true;
        } else {
            alert("Please choose 1, 2 or 3!"); //If number is not possible, alert and restart the turn
        }
    }
    return playerTurn;
}

function main() {
    var number = 0;
    var begin = confirm("Do you want to start?");
    if (begin) {
        while (number < 21) {
            number = player(number);
            number = ai(number);
        }
    } else {
        while (number < 21) {
            number = ai(number);
            number = player(number);
        }
    }
    var again = alert("Do you want to play again?");
    if (again) {
        main();
    }
}
