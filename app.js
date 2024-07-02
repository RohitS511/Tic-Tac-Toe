let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".msg");

let turnX = true;
let count = 0;

const winPatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        } else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;    

        let isWinner = checkWinnner();

        if(count == 9 && !isWinner){
            draw(); 
        }
    })
})

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const draw = () => {
    msg.innerText = "Game was draw";
    msgContainer.classList.remove("hide");
    disable();
}

let checkWinnner = () => {
    for(let pattern of winPatt){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner", pos1)
                showWinner(pos1)
            }
        }
    }
}

const showWinner = (winner) => {
    console.log(`Congratulations the winner is ${winner}`);
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}

const rest = () => {
    turnX = true;
    count = 0;
    enable();
    msgContainer.classList.add("hide");
};


newGame.addEventListener("click",rest); 
resetGame.addEventListener("click",rest); 