function game(){
    let i;
    let playerScore = 0;
    let computerScore = 0;
    let choices = ['rock', 'paper', 'scissors'];
    for (i = 0; i < 5; i++){
        playerChoice = prompt("Throw your hand by typing your choice:");
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(playRound(playerChoice, computerChoice));

        if (playerChoice === computerChoice){
        playerScore = playerScore + 0.5;
        computerScore = computerScore + 0.5;
        } else if (playerWins(playerChoice, computerChoice)){
        playerScore = playerScore + 1;
        } else {
        computerScore = computerScore + 1;
        }

        printResult(playerScore, computerScore);
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return(`It's a tie! Both players threw ${playerSelection}`);
    } else if (playerWins(playerSelection, computerSelection)){
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function playerWins(player, computer){
    if (player === 'rock' && computer === 'scissors'){
        return(true);
    } else if (player === 'paper' && computer === 'rock'){
            return(true);
    } else if (player === 'scissors' && computer === 'paper'){
            return(true);
    } else{
            return(false);
    }
}

function printResult(playerScore, computerScore){
    if (playerScore + computerScore === 5){
        if (playerScore === computerScore){
            console.log('You tied.');
        }
        else{
            (playerScore > computerScore) ? console.log('You won.') : console.log('You lost.');
        }
    } else{
        console.log(`Current score: ${playerScore} - ${computerScore}`)
    }
}
