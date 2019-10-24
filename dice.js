let score = [0]
const diceRoll = document.getElementById("roll")
const diceImg = document.getElementById("dice-img")
let gameBegin = true

diceRoll.addEventListener("click", ()=>{
    
    if(gameBegin){
        let dice = Math.floor(Math.random() * 6) + 1;
        diceImg.src = "dice-" + dice + ".png"
    }
})


