let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    return Math.abs(humanGuess-targetGuess)<=Math.abs(computerGuess-targetGuess);
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    }else if (winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}