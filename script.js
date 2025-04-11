let start = document.getElementById("play");
let gameActive = document.getElementById("gameActive");
let showing = document.getElementById("choice");
let article = document.querySelector("article");
let submit = document.getElementById("submit");
const choices = ["rock", "papper", "scissors"];
const result = document.getElementById("result");
const playAgain = document.getElementById("gameOn");
let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;
startGame = function () {
  article.style.display = "none";
  gameActive.style.display = "block";
  start.style.display = "none";
  submit.style.display = "block";
  document.getElementById("choice").value = "";
};
start.addEventListener("click", startGame);
// to get user choice and computer choice
function getComputerChoice() {
  let randomchoice = Math.floor(Math.random() * choices.length);
  let computerChoice = document.getElementById("computerChoice");
  computerChoice.textContent = `Computer choose: ${choices[
    randomchoice
  ].toUpperCase()}`;
  return choices[randomchoice].toUpperCase();
}
function getUserChoice() {
  const input = document.getElementById("choice").value.toUpperCase();
  const yourChoice = document.getElementById("yourChoice");
  if (input === "ROCK" || input == "PAPPER" || input == "SCISSORS") {
    yourChoice.textContent = `You choose: ${input}`;
    return input;
  } else {
    yourChoice.textContent =
      'Invalid choice please Enter "Rock", "Papper" or "Scissors" ';
    return null;
  }
  // input.value = "";
}

// to get user choice and computer choice and to compare them
function playround() {
  if (round < 5) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    if (userChoice !== null) {
      if (userChoice === computerChoice) {
        tie++;
        result.textContent = `Round ${round + 1}: its a tie!`;
      } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPPER")
      ) {
        humanScore++;
        result.textContent = `Round ${
          round + 1
        }: You win! ${userChoice} beat ${computerChoice}`;
      } else {
        computerScore++;
        result.textContent = `Round ${
          round + 1
        }: Computer wins! ${computerChoice} beat ${userChoice}`;
      }
    }
    document.getElementById("choice").value = "";
    round++;
  }
  if (round === 5) {
    declearWinner();
  }
}
submit.addEventListener("click", playround);
function declearWinner() {
  document.getElementById("result").textContent = "";
  document.getElementById("yourChoice").textContent = "";
  document.getElementById("computerChoice").textContent = "";
  // .textContent = "";
  let finaLMessage = "";
  if (humanScore > computerScore) {
    finaLMessage = `You win the game! 
    You: ${humanScore}
    Computer: ${computerScore}`;
  } else if (humanScore < computerScore) {
    finaLMessage = `Computer won the game! 
    Computer: ${computerScore}
    You: ${humanScore}`;
  } else {
    finaLMessage = `Ooops its a tie!
    You: ${humanScore}
    Computer: ${computerScore}`;
  }
  document.getElementById("gameStatus").textContent = finaLMessage;
  submit.style.display = "none";
  showing.style.display = "none";
  document.querySelector("h3").style.display = "none";
  playAgain.style.display = "block"; //show a play again button
}
 //   reset for new game

function yes() {
  round = 0;
  humanScore = 0;
  computerScore = 0;
  tie = 0;
  showing.style.display = "block";
  showing.style.margin = "0 auto";
  document.querySelector("h3").style.display = "block";
  submit.style.display = "block";
  document.getElementById("result").textContent = "";
  document.getElementById("gameStatus").textContent = "";
  document.getElementById("yourChoice").textContent = "";
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("choice").textContent = "";
  playAgain.style.display = "none";
}
function no() {
  document.getElementById("gameStatus").textContent = "Thanks for playing";
  document.getElementById("choice").style.display = "none";
  document.querySelector("h3").style.display = "none";
  playAgain.style.display = "none";
  return;
}
