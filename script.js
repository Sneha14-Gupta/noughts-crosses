const currentPlayerEl=document.querySelector(".current_player");
const boxes=document.querySelectorAll(".box");
console.log(boxes);

const players=["o","x"];
let currentPlayer="x";

const randomPlayer=function(){
    const randomNum=Math.floor(Math.random()*2);
    currentPlayer=players[randomNum];

}
randomPlayer();
currentPlayerEl.textContent=currentPlayer;
console.log(currentPlayer);

const swapPlayer=()=>{
    if(currentPlayer==="x"){
        currentPlayer="o"
    }else{
        currentPlayer="x"
    }
}
swapPlayer();
console.log(currentPlayer);

function handleClick(el){
    el.textContent=currentPlayer;
    swapPlayer();
    
}
// for(let i=0;i<boxes.length;i++){
//     boxes[i].addEventListener("click",handleClick(i));
// }
boxes.forEach(el => {
    boxes[el].addEventListener("click",handleClick(el));
    // if(currentPlayer===""){
    //     console.log();
        

    // }

    
});