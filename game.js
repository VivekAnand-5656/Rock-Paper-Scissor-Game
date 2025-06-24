let userScore = 0;
let compScore = 0;
let choces = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let msgBox = document.getElementById("msgbox");

let userPara = document.querySelector("#user")
let CompPara = document.querySelector("#computer");

let gnrtCmpChoice = () => {
    let options = ["rock", "paper", "cheiser"];
    let randInds = Math.floor(Math.random() * 3);
    return options[randInds];
}

let drawGame = () => {
    console.log("Game draw");
    msg.innerText = "Game Draw";

}

let showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("Win");
        userScore++;
        userPara.innerText = userScore;
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor="green";
    } else {
        console.log("Loose");
        compScore++;
        CompPara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msgBox.style.backgroundColor="red";
    }
}
let playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    let compChoice = gnrtCmpChoice();
    console.log("Computer Choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "cheiser" ? false : true;
        } else {
            // rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choces.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })

})