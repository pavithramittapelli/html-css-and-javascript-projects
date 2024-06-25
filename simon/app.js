let gameSeq = [];
let userSeq = []; 
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["red", "purple", "blue", "yellow"];
document.addEventListener("keypress", function () {
    h3.innerText = "Game Started";
    if (started == "false") {
        started = true;
    }
    levelUp();
});
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level-${level}`;
    let randomIndx = Math.floor(Math.random() * 3 );
    let randomColor = btns[randomIndx];
    let ranBtn = document.querySelector(`.${randomColor}`);
    console.log(randomColor);
    gameFlash(ranBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    
}
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(()=> {
        btn.classList.remove("flash")
    }, 500);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp(),1000) ;
        }
    } else {
        h3.innerText = `Game Over\nYour score is ${level} points\nEnter any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(()=> {
        btn.classList.remove("userflash")
    }, 1000);
    userSeq.push(btn.getAttribute("id"));
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".button");
for (btn of allBtns) {
    btn.addEventListener("click", function () {
        userFlash(this);
    }
    );
} function reset() {
    started = false;
    gameSeq = []; 
    userSeq = [];
    level = 0;
}