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
        return ["Draw!", "draw"]
    } else {
        for (array of losing_combinatons_player) {
            player_move = array[0]
            computer_move = array[1]
            if ((player_move == playerSelection) && (computer_move == computerSelection)) {
                return ["You Lose! " + computerSelection + " beats " + playerSelection, "computer"]
            }
        }

        return ["You Won! " + playerSelection + " beats " + computerSelection, "player"]
    }


    return "You Lose! Paper beats Rock"
}

function game() {
    console.log("let's play rock paper scissors!")

    let computer_score = 0;
    let player_score = 0;

    for (let i = 0; i < 5; i++) {
        let round = i + 1
        console.log("Round number " + round.toString())

        console.log("Player chose " + playerSelection)
        console.log("Computer chose " + computerSelection)
        result = playRound(playerSelection, computerSelection)
        console.log(result[0])

        if (result[1] == "computer") {
            computer_score++
        } else {
            player_score++
        }

        if (player_score > computer_score) {
            console.log("You won!")
        } else {
            console.log("You lost!")
        }

    }
}

game()