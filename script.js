

const currentPlayerEl = document.querySelector(".current_player");
const boxes = document.querySelectorAll(".box");
const resetbtnEl = document.querySelector(".reset-button");
const gamegrid = document.querySelector(".game");
resetbtnEl.classList.add("active");
// console.log(boxes);

const players = ["o", "x"];
let currentPlayer = "x";

const randomPlayer = function () {
  const randomNum = Math.floor(Math.random() * 2);
  currentPlayer = players[randomNum];
};
randomPlayer();
currentPlayerEl.textContent = currentPlayer;
console.log(currentPlayer);

const swapPlayer = () => {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
};
swapPlayer();
console.log(currentPlayer);

// function handleClick(el){
//     el.textContent=currentPlayer;
//     swapPlayer();

// }

boxes.forEach((el) => {
  el.addEventListener("click", () => {
    handleClick(el);
  });
});
// resetbtnEl.addEventListener("click",()=>{
//     resetbtnEl.classList.remove("active");
// })

const color = ["red", "orange", "blue", "pink"];

function handleClick() {
//   const randomCl = Math.floor(Math.random() * color.length);
  gamegrid.style.background = randomHex();
}
resetbtnEl.addEventListener("click", handleClick);

function randomHex() {
  const char = "123456789ABCDEF";
  let str = "#";
  for(let i=0;i<6;i++){
  const rh = char[Math.floor(Math.random() * char.length)];
  str += rh;
}
console.log(str);
return str;

}


