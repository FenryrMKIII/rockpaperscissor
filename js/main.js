let COMPUTERSCORE
let PLAYERSCORE
let ROUNDRESULT
let ROUNDWINNER

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function computerPlay() {
    let choice
    const outcomes = ['rock', 'paper', 'scissors']
    choice = randomIntFromInterval(0, 2)
    return outcomes[choice]
}

function isWin(playerSelection, computerSelection) {
    let player_move
    let computer_move

    const losing_combinations_player = [
        ['paper', 'scissors'],
        ['rock', 'paper'],
        ['scissor', 'rock']
    ]

    for (array of losing_combinations_player) {
        player_move = array[0]
        computer_move = array[1]
        if ((player_move == playerSelection) && (computer_move == computerSelection)) {
            return false
        } else {
            return true
        }
    }

}

function isDraw(playerSelection, computerSelection){
    return (playerSelection == computerSelection)
}



function playRound(e) {

    const playerSelection = e.target.textContent
    const computerSelection = computerPlay()

    // const playerSelectionSerialized = playerSelection.toLowerCase();

    if (isDraw(playerSelection, computerSelection)) {
        ROUNDWINNER = "Draw!"
        ROUNDRESULT = "It's a draw!"
        console.log("it is a draw")
    } else {
        if  (isWin(playerSelection, computerSelection)) {
            ROUNDWINNER = "player"
            ROUNDRESULT = "You Won! " + playerSelection + " beats " + computerSelection
            PLAYERSCORE++
            console.log("it is a win")
        } else {
            ROUNDWINNER = "computer"
            ROUNDRESULT = "You Lost! " + computerSelection + " beats " + playerSelection
            COMPUTERSCORE++
            console.log("it is a loss")
        }
    }

    updateScore()
}

function updateScore(){
    // update the score board & results
    const roundResult = document.getElementById("roundResult")
    roundResult.textContent = ROUNDRESULT

    const scoreBoard = document.getElementById("scoreBoard")
    scoreBoard.textContent = "player: " + PLAYERSCORE + "\t" + "computer: " + COMPUTERSCORE
}

function game() {

    ROUNDRESULT = ""
    COMPUTERSCORE = 0
    PLAYERSCORE = 0

    function logMove(e){
        console.log(e.target.textContent)
    }

    // attach listeners for possible actions
    const playButtonsContainer = document.querySelector(".playButtons")
    const playButtons = Array.from(playButtonsContainer.querySelectorAll(":scope > button"));
    playButtons.forEach(playButton => playButton.addEventListener('click', playRound));

}

game()