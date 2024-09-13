import winning from "./winning";
// console.log(winning);

// dom element
const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current_player");
const boxesEl = document.querySelectorAll(".box");
const resetBtnEl = document.querySelector(".reset-button");

const players = ["o", "x"];
let currentPlayer;
let gameGrid;

// fxn
function randomPLayer() {
  const newPlayer = Math.floor(Math.random() * 2);
  currentPlayer = players[newPlayer];
}
function swapPlayer() {
  const newPlayer = currentPlayer === players[0] ? players[1] : players[0];
  currentPlayer = newPlayer;
}
function startGame() {
  gameGrid = new Array(9).fill("");
  resetBtnEl.classList.remove("active");
  randomPLayer();
  currentPlayerEl.texContent = currentPlayer;
}
startGame();

function checkWinner() {
  winning.forEach((chance) => {
    const [c1, c2, c3] = chance;
    // console.log(c1,c2,c3);
    if (
      gameGrid[c1] &&
      gameGrid[c2] &&
      gameGrid[c3] &&
      gameGrid[c1] === gameGrid[c2] &&
      gameGrid[c2] === gameGrid[c3]
    ) {
      boxesEl.forEach((box) => (box.style.pointerEvents = "none"));
      // show new game
      resetBtnEl.classList.add("active");
      // add green class
      boxesEl[c1].classList.add("green");
      boxesEl[c2].classList.add("green");
      boxesEl[c3].classList.add("green");
      headingEl.textContent = `${gameGrid[c1]} won!`;
      currentPlayerEl.textContent = `${gameGrid[c1]}won!`;

      //   console.log("win of game is :", currentPlayer);
    }
    const x = gameGrid.every((el) => el !== "");
    if (x && !headingEl.textContent.includes("won")) {
      headingEl.textContent = "Game is Draw";

      resetBtnEl.classList.add("active");
    }
  });
  //   console.log(winning);
}

function handleclick(index) {
  // if only gamegrid is empty
  if (gameGrid[index] === "") {
    // update player in dom and remove hover hand
    boxesEl[index].textContent = currentPlayer;
    boxesEl[index].style.pointerEvents = "none";
    // update gamegrid
    // currentPlayerEl.textContent = currentPlayer;
    gameGrid[index] = currentPlayer;
    checkWinner();
    currentPlayerEl.textContent = currentPlayer;
    swapPlayer();
  }

  // console.log(index);
}
boxesEl.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleclick(index);
  });
});

resetBtnEl.addEventListener("click", () => {
  startGame();
  headingEl.textContent = "NOughts & Crosses";
  boxesEl.forEach((box) => {
    box.classList.remove("green");
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
});
