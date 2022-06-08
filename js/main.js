function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function computerPlay() {
    const outcomes = ['rock', 'paper', 'scissors']
    choice = randomIntFromInterval(0, 2)
    return outcomes[choice]
}

const playerSelection = "rock";
const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {

    const losing_combinatons_player = [
        ['paper', 'scissors'],
        ['rock', 'paper'],
        ['scissor', 'rock']
    ]

    const playerSelectionSerialized = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Draw!"
    } else {
        for (array of losing_combinatons_player) {
            player_move = array[0]
            computer_move = array[1]
            if ((player_move == playerSelection) && (computer_move == computerSelection)) {
                return "You Lose! " + computerSelection + " beats " + playerSelection
            }
        }

        return "You Won! " + playerSelection + " beats " + computerSelection
    }



    for (const color of colors)


        return "You Lose! Paper beats Rock"
}

console.log("let's play rock paper scissors!")
console.log("Player chose " + playerSelection)
console.log("Computer chose " + computerSelection)
console.log(playRound(playerSelection, computerSelection))