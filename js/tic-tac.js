
let currentPlayer = "X";
let displayPlayerOneScore = document.getElementById("playerOneScore");
let displayPlayerTwoScore = document.getElementById("playerTwoScore");
let gameRunning = true;
let idArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let resetBtn = document.getElementById("reset");

function startGame() {

    idArray.forEach((id) => {
        let element = document.getElementById(id);

        element.addEventListener("click", () => {
            if (gameRunning && !element.innerHTML) {
                element.innerHTML = currentPlayer;

                if (currentPlayer === "X") {
                    currentPlayer = "O";

                } else {
                    currentPlayer = "X";
                }
            }

            if (checkWinner()) {
                clearCells();
                alert("Player " + currentPlayer + " wins!");
                if (currentPlayer === "X") {
                    displayPlayerOneScore.innerHTML = parseInt(displayPlayerOneScore.innerHTML) + 1;
                    displayPlayerOneScore.style.color = "blue";
                } else if (currentPlayer === "O") {
                    displayPlayerTwoScore.innerHTML = parseInt(displayPlayerTwoScore.innerHTML) + 1;
                    displayPlayerTwoScore.style.color = "red";
                }
            }

        });
    });
}
startGame();

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (document.getElementById(idArray[i * 3 + 0]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 1]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 2]).innerHTML === currentPlayer) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (document.getElementById(idArray[i * 3 + 0]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 3]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 6]).innerHTML === currentPlayer) {
            return true;
        }
    }


    for (let i = 0; i < 3; i++) {
        // Check diagonals
        if (document.getElementById(idArray[i * 3 + 0]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 4]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 8]).innerHTML === currentPlayer) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (document.getElementById(idArray[i * 3 + 2]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 4]).innerHTML === currentPlayer &&
            document.getElementById(idArray[i * 3 + 6]).innerHTML === currentPlayer) {
            return true;
        }

        

    }
    // If no winner is found, return false
    return false;
}

function clearCells() {
    idArray.forEach((id) => {
        let element = document.getElementById(id);
         element.innerHTML = "";
     })
     
} clearCells();



