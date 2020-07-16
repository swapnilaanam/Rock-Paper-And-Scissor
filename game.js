function eventListener() {
    const allMoves = document.querySelectorAll('#player-input i');
    const resultMove = document.querySelector('.result-move');
    const resultDescription = document.querySelector('.result-reason');
    const playerScore = document.querySelector('.ply');
    const computerScore = document.querySelector('.com');
    const playerMove = document.querySelectorAll('.player-move');

    console.log(allMoves);

    var player = 0;
    var computer = 0;

    function resultGenerator(resultMoveText, resultDescriptionText) {
        resultMove.textContent = resultMoveText;
        resultDescription.textContent = resultDescriptionText;
    }

    function makePlayerMove(playerInput) {
        if(playerInput == 0) {
            playerMove[0].innerHTML = `<i class="far fa-hand-rock"></i>`;
        }
        else if(playerInput == 1) {
            playerMove[0].innerHTML = `<i class="far fa-hand-paper"></i>`;
        }
        else if (playerInput == 2) {
            playerMove[0].innerHTML = `<i class="far fa-hand-scissors"></i></i>`;
        }
    }

    function makeComputerMove(computerInput) {
        if(computerInput == 0) {
            playerMove[1].innerHTML = `<i class="far fa-hand-rock"></i>`;
        }
        else if(computerInput == 1) {
            playerMove[1].innerHTML = `<i class="far fa-hand-paper"></i>`;
        }
        else if (computerInput == 2) {
            playerMove[1].innerHTML = `<i class="far fa-hand-scissors"></i></i>`;
        }
    }

    function callingVAR(playerInput,computerInput) {
        if(playerInput == computerInput) {
            resultGenerator("Game Tied !","Both Player Made The Same Move ...");
        }
        else {
            if (playerInput == 0 && computerInput == 1) {
                resultGenerator("Computer Wins!","Paper Catches Rock...");
                computer++;
            }
            else if (playerInput == 1 && computerInput == 0) {
                resultGenerator("Player Wins!","Paper Catches Rock...");
                player++;
            }
            else if(playerInput == 0 && computerInput == 2) {
                resultGenerator("Player Wins!","Rock Destroys Scissor...");
                player++;
            }
            else if (playerInput == 2 && computerInput == 0) {
                resultGenerator("Computer Wins!","Rock Destroys Scissor...");
                computer++;
            }
            else if (playerInput == 1 && computerInput == 2) {
                resultGenerator("Computer Wins!","Scissor Cuts Paper...");
                computer++;
            }
            else if (playerInput == 2 && computerInput == 1) {
                resultGenerator("Player Wins!","Scissor Cuts Paper...");
                player++;
            }        
        }
    }

    function startPlay() {

        var playerInput, computerInput;
        computerInput = Math.floor(Math.random()*3);

        if(this == allMoves [0]) playerInput = 0;
        else if (this == allMoves[1]) playerInput = 1;
        else if (this == allMoves[2]) playerInput = 2;

        allMoves[0].style.animation = "rotateMove 1s 2";
        allMoves[1].style.animation = "rotateMove 1s 2";
        allMoves[2].style.animation = "rotateMove 1s 2";

        setTimeout(function() {
            makePlayerMove(playerInput);
            makeComputerMove(computerInput);
            callingVAR(playerInput,computerInput);
            playerScore.textContent = player;
            computerScore.textContent = computer;
            allMoves[0].style.animation = "";
            allMoves[1].style.animation = "";
            allMoves[2].style.animation = "";
        },1800)
        
    }

    allMoves.forEach(move => move.addEventListener('click',startPlay));
}

document.addEventListener('DOMContentLoaded',eventListener);