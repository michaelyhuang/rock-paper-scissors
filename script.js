const choices = ['rock', 'paper', 'scissors'];

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
        return(`tie`);
    } else if (playerWins(playerSelection, computerSelection)){
        return(`win`);
    } else {
        return(`lose`);
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


function updateScore(gameResult){
    // Update the score element
    let playerScoreContainer = document.querySelector(".playerScore");
    let computerScoreContainer = document.querySelector(".computerScore");
    let playerScore = Number(playerScoreContainer.textContent);
    let computerScore = Number(computerScoreContainer.textContent);
    switch(gameResult) {
        case "tie":
        playerScoreContainer.textContent = playerScore + 0.5;
        computerScoreContainer.textContent = computerScore + 0.5;
        break;
        case "win":
        playerScoreContainer.textContent = playerScore + 1;
        break;
        case "lose":
        console.log(computerScore);
        computerScoreContainer.textContent = computerScore + 1;
        break;
    }
}

function endGame(outcome){
    // Update score
    updateScore(outcome);
    let playerScoreContainer = document.querySelector(".playerScore");
    let computerScoreContainer = document.querySelector(".computerScore");
    let playerScore = Number(playerScoreContainer.textContent);
    let computerScore = Number(computerScoreContainer.textContent);
    // Determine winner based on score element
    if (playerScore > computerScore){
        console.log("WIN");
    } else if (playerScore < computerScore){
        console.log("LOSE");
    } else {
        console.log("TIE");
    }
    // Print a message
    // Remove RPS buttons and replace with "Play Again" button
}




const container = document.querySelector(".gameContainer")
const btn = document.querySelector(".start")
btn.addEventListener('click', function() {
    let rockButton = createButton("Rock");
    let scissorsButton = createButton("Scissors");
    let paperButton = createButton("Paper");
    
    container.appendChild(rockButton);
    container.appendChild(scissorsButton);
    container.appendChild(paperButton);
    container.removeChild(btn);

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    
    let roundsLeft = document.querySelector(".roundsLeft");

    rock.addEventListener('click', function(){
        let playerChoice = this.id;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let outcome = playRound(playerChoice, computerChoice);
        console.log(outcome);
        console.log(roundsLeft.textContent);

        if (roundsLeft.textContent === '1'){
            endGame(outcome);
        } else {
            updateScore(outcome);
            roundsLeft.textContent = roundsLeft.textContent - 1;
        }

    })
})

function createButton(buttonName) {
    let newButton = document.createElement('button');
    newButton.className = "choiceButton";
    newButton.id = buttonName.toLowerCase();
    newButton.textContent = buttonName;
    return newButton;
}


