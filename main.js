let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()* 3);
  return choices[randomNumber];
}


function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "computer".fontsize(3). sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUser + " beats " + convertToWord(computerChoice) + smallComp + ". You Win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
  }


function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "computer".fontsize(3). sub();
  result_div.innerHTML = convertToWord(userChoice) + smallUser + " loses " + convertToWord(computerChoice) + smallComp + ". You Lost....";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
  }

function draw(userChoice, computerChoice){

  const smallUser = "user".fontsize(3).sub();
  const smallComp = "computer".fontsize(3). sub();
  result_div.innerHTML = convertToWord(userChoice) + smallUser + " equals " + convertToWord(computerChoice) + smallComp + ". It is Draw..";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 1000);
}

function game(userChoice){
  const computerChoice = getComputerChoice();

  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;

  }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));


    scissors_div.addEventListener('click', () => game("s"));

}
main();
