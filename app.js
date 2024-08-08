let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let newUserScore = document.querySelector("#user-score");
let newCompScore = document.querySelector("#comp-score");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const ramIdx = Math.floor(Math.random() * 3);
  console.log(ramIdx);
  return choices[ramIdx];
};

const showWin = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    newUserScore.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    newCompScore.innerText = compScore;
    msg.innerText = `You loose! Your ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  if (computerChoice === userChoice) {
    drawGame();
  } else {
    if (userChoice === "rock") {
      let userWin;
      if (userChoice === "rock") {
        userWin = computerChoice === "scissors";
      } else if (userChoice === "paper") {
        userWin = computerChoice === "rock";
      } else if (userChoice === "scissors") {
        userWin = computerChoice === "paper";
      }
      showWin(userWin, userChoice, computerChoice);
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    console.log(userChoice);
  });
});
