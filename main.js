let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const humanScoreSpan = document.querySelector('.human-score');
const computerScoreSpan = document.querySelector('.computer-score');



function getComputerChoice() {
   
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    // const choice = choices[randomNum];
    // console.log(`Computer choice: ${choice}`); // Debugging
    return choices[randomNum];
}

// function getHumanChoice() {
//     let humanChoice;
//     if (!humanChoice) {
//         humanChoice = prompt("Enter rock, paper, or scissors?");
//         //if (humanChoice) {
            
            
//             } else{
//                 humanChoice = humanChoice.toLowerCase();
//                 if (!["rock", "paper", "scissors"].includes(humanChoice)) {
//                     alert("Invalid input! Please enter rock, paper, or scissors.");
//                     humanChoice = null;
//                 }
//             //alert("Input cannot be empty. Please enter rock, paper, or scissors.");
//         }
//     console.log(`Human choice: ${humanChoice}`); // Debugging
//     return humanChoice;

//     }
   


// function playRound(humanChoice, computerChoice) {

//     if (humanChoice === computerChoice) {
//         const para = document.createElement("p");
//         para.innerText =  "Tie! You both picked ${humanChoice}";
//     } else if (humanChoice === "rock") {
//         para.innerText = (computerChoice === "scissors") ? "You win! Rock beats scissors!" : "You lose! Paper beats rock!";
//     } else if (humanChoice === "paper") {
//         return (computerChoice === "rock") ? "You win! Paper beats rock!" : "You lose! Scissors beat paper!";
//     } else if (humanChoice === "scissors") {
//         return (computerChoice === "paper") ? "You win! Scissors beat paper!" : "You lose! Rock beats scissors!";
//     }
// }

function playRound(humanChoice, computerChoice) {
    console.log('1', humanChoice, '2', computerChoice);
    if (humanChoice === computerChoice) {
        computerScore++;
        humanScore++;
        const para = document.createElement("p");
        para.innerText =  `Tie! You both picked ${humanChoice}`;
        outcomeDiv.appendChild(para);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        const para = document.createElement("p");
        para.innerText =  "You lost ! Rock crushes scissors!";
        outcomeDiv.appendChild(para);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        const para = document.createElement("p");
        para.innerText =  "You win ! Scissors cuts paper!";
        outcomeDiv.appendChild(para);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        const para = document.createElement("p");
        para.innerText =  "You lose ! Paper beats rock!";
        outcomeDiv.appendChild(para);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        const para = document.createElement("p");
        para.innerText =  "You win ! Paper beats rock!";
        outcomeDiv.appendChild(para);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        const para = document.createElement("p");
        para.innerText =  "You win ! Rock beats scissors";
        outcomeDiv.appendChild(para);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        const para = document.createElement("p");
        para.innerText =  "You lose ! Scissors beats paper!";
        outcomeDiv.appendChild(para);
    }
   
}



function checkWinner(humanScore, computerScore) {
    // console.log('1', computerScore, '2', humanScore)
    if(humanScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("human-won");
    h2.innerText = `You won ${humanScore} to ${computerScore}`
    outcomeDiv.append(h2);
     }
     if (computerScore === 5) {
         const h2 = document.createElement("h2");
 
         h2.classList.add("computer-won");
         h2.innerText = `You lost ${humanScore} to ${computerScore}`
         outcomeDiv.append(h2);
     }
 }

 const updateScores = (humanScore, computerScore) => {
    console.log('1', computerScore, '2', humanScore)
    humanScoreSpan.innerText = `Player Score : ${humanScore}      `
    computerScoreSpan.innerText = `Computer Score : ${computerScore}    `
    
}

rockBtn.addEventListener('click' ,() => {
    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    playRound(humanChoice, computerChoice)
    updateScores(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
}) 

paperBtn.addEventListener('click' ,() => {
    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    playRound(humanChoice, computerChoice)
    updateScores(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
}) 

scissorBtn.addEventListener('click' ,() => {
    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    playRound(humanChoice, computerChoice)
    updateScores(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
}) 


// function playGame() {
//     console.log("Starting game..."); // Debugging
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         const roundResult = playRound(humanSelection, computerSelection);
//         console.log(roundResult);

//         if (roundResult.includes("You win")) {
//             humanScore++;
//         } else if (roundResult.includes("You lose")) {
//             computerScore++;
//         }
//     }

//     console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

//     let gameWinner;
//     if (humanScore > computerScore) {
//         gameWinner = "You win the game!";
//     } else if (humanScore === computerScore) {
//         gameWinner = "It's a tie!";
//     } else {
//         gameWinner = "You lose the game!";
//     }

//     console.log(gameWinner);
// }

// playGame();
