//make a reset button

//put the player's options in a nodelist
let playerButtons = document.querySelectorAll('button');
//if one of them is clicked call a function
playerButtons.forEach((button) => {
    button.addEventListener('click', playGame);
})

//determines the computer's choice
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    //find a random number within the range of the array
    let random = Math.floor(Math.random() * options.length);
    //use that number to select an option
    let computerSelection = options[random]
    return computerSelection;
}

//goes through the actual game: if/else, increments scoreboard
function playGame(e) {
    let playerSelection = e.target.id;
    //call a function to find the computer's choice
    const computerSelection = computerPlay()
    let results;
    let playerScore = document.getElementById('player').textContent;
    let computerScore = document.getElementById('computer').textContent;
    //don't let another round go through id the game has already been won
    if (playerScore == 5 || computerScore == 5) {
        prompt('Would you like to play again?')
        return;
    }

    //if player wins
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        results = 'Player wins!'
        playerScore++
        if (playerScore == 5) {
            results = 'Congratulations, you won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        results = 'Player wins!'
        playerScore++
        if (playerScore == 5) {
            results = 'Congratulations, you won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        results = 'Player wins!'
        playerScore++
        if (playerScore == 5) {
            results = 'Congratulations, you won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    }

    // if player loses
    else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
        results = "Player loses!"
        computerScore++
        if (computerScore == 5) {
            results = 'Oh no, the computer won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        results = "Player loses!"
        computerScore++
        if (computerScore == 5) {
            results = 'Oh no, the computer won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        results = "Player loses!"
        computerScore++
        if (computerScore == 5) {
            results = 'Oh no, the computer won the game!'
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        } else {
            displayScoreBoard(computerScore, playerScore)
            return displayResults(results)
        }
    }

    //if there's a draw
    else {
        results = "It's a Draw!"
        return displayResults(results)
    }
}

//display who wins
function displayResults(results) {
    let finalResults = document.getElementById('results');
    return finalResults.textContent = results;
}

//update the scoreboard
function displayScoreBoard(compScore, playScore) {
    //only need to return one of these values
    let computer = document.getElementById('computer');
    let player = document.getElementById('player');
    if (compScore > computer.textContent) {
        return computer.textContent = compScore;
    } else if (playScore > player.textContent) {
        return player.textContent = playScore
    }
}





