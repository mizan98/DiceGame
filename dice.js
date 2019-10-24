let score = 0
const diceRoll = document.getElementById("roll")
const diceImg = document.getElementById("dice-img")
let gameBegin = true

diceRoll.addEventListener("click", ()=>{
    document.getElementById("playermsg").innerHTML = `Good Luck`
    let dice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = "dice-" + dice + ".png"
    score += dice
    if (dice > 1){ 
        document.getElementById("player1score").innerHTML = `score: ${score}`
    }
    if (score >= 20){
        let winnerMsg = document.getElementById("playermsg")
        winnerMsg.textContent = "You WIN!!"
        score = 0
    }

    else if (dice == 1 && score < 20){
        let loserMsg = document.getElementById("playermsg")
        loserMsg.textContent = "you lose"
        score = 0
    } 
})


