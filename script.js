let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[randomNum];
    console.log(`Computer choice: ${choice}`); // Debugging
    return choice;
}

function getHumanChoice() {
    let humanChoice;
    if (!humanChoice) {
        humanChoice = prompt("Enter rock, paper, or scissors?");
        //if (humanChoice) {
            
            
            } else{
                humanChoice = humanChoice.toLowerCase();
                if (!["rock", "paper", "scissors"].includes(humanChoice)) {
                    alert("Invalid input! Please enter rock, paper, or scissors.");
                    humanChoice = null;
                }
            //alert("Input cannot be empty. Please enter rock, paper, or scissors.");
        }
    console.log(`Human choice: ${humanChoice}`); // Debugging
    return humanChoice;

    }
   


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (humanChoice === "rock") {
        return (computerChoice === "scissors") ? "You win! Rock beats scissors!" : "You lose! Paper beats rock!";
    } else if (humanChoice === "paper") {
        return (computerChoice === "rock") ? "You win! Paper beats rock!" : "You lose! Scissors beat paper!";
    } else if (humanChoice === "scissors") {
        return (computerChoice === "paper") ? "You win! Scissors beat paper!" : "You lose! Rock beats scissors!";
    }
}

function playGame() {
    console.log("Starting game..."); // Debugging
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("You win")) {
            humanScore++;
        } else if (roundResult.includes("You lose")) {
            computerScore++;
        }
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    let gameWinner;
    if (humanScore > computerScore) {
        gameWinner = "You win the game!";
    } else if (humanScore === computerScore) {
        gameWinner = "It's a tie!";
    } else {
        gameWinner = "You lose the game!";
    }

    console.log(gameWinner);
}

playGame();
