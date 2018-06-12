/*
Description: A simple and fun logic game. Two players count up. Per turn they have to count up either 1, 2 or 3 numbers.
The player who reaches a number 21 or higher first, looses.
*/

//The computer player

function ai(aiNumber) {
    
    switch(aiNumber) {
        case 1:
        return 3;
        case 2:
        return 2;
        case 3:
        return 1;
        case 4:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
        case 5:
        return 3;
        case 6:
        return 2;
        case 7:
        return 1;
        case 8:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
        case 9:
        return 3;
        case 10:
        return 2;
        case 11:
        return 1;
        case 12:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
        case 13:
        return 3;
        case 14:
        return 2;
        case 15:
        return 1;
        case 16:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
        case 17:
        return 3;
        case 18:
        return 2;
        case 19:
        return 1;
        case 20:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
        case 0:
        var a = Math.round(Math.random());
        var b = Math.round(Math.random());
        return 1+a+b;
    }
//The trick to win is to always be on a number that can be divided by 4
}

//The player

function player() {
    var playerTurn = 1;
    var correctInput = false;
    while (correctInput == false) {
        var input = prompt("How many steps will you go?", "1, 2, 3"); //ask him by how much he wants to count up
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

function endGame(endnumber, winner) {
    if (endnumber>20) {
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

function main() {
    while (true) {
        var number = 0;
        var begin = confirm("Do you want to start?");
        if (begin) {
            while (number < 21) {                
                number += player();
                alert("The current number is " + number)
                endGame(number, "ai");
                number += ai(number);
                alert("The current number is " + number)
                endGame(number, "player");
            }
        } else {
            while (number < 21) {
                number += ai(number);
                alert("The current number is " + number)
                endGame(number, "player");
                number += player();
                alert("The current number is " + number)
                endGame(number, "ai");
            }
        }
    }
}

setTimeout(main, 1500);
