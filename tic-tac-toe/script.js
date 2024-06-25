console.log("welcome to tic tac toe");
let music = new Audio("gamemusic.mp3");
let audioTurn = new Audio("ting.mp3")
let gameOver = false;
let turn = "X";
//Function to change the turn
const changeTurn= () => {
    return turn == "X" ? "O" : "X";
}
//Function to check for a win
const checkWin = () => {
    let text = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [0, 4, 8], [2, 5, 8], [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) &&
            (text[e[2]].innerText === text[e[1]].innerText) &&
            (text[e[0]].innerText !== '')) {
            document.getElementById("info").innerText = text[e[0]].innerText + " has won!";
            gameOver = true;
            document.querySelector("img").style.width = "200px";
            music.play();
        }
    })

}
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementById("info").innerText= "Turn for " + turn;
            }
        }
    })
})
//Add onclick listener to reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    music.pause();
    let boxes = document.querySelectorAll(".boxtext");
    Array.from(boxes).forEach(ele => {
        ele.innerText = "";
    })
    document.querySelector("img").style.width = "0";
    turn = "X";
    gameOver = false;
    if (!gameOver) {
        document.getElementById("info").innerText= "Turn for " + turn;
    }
})
