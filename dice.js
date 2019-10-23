class DiceGame {
    constructor(player1, player2){
        this._player1 = player1
        this._player2 = player2
        player1Score = 0
        player2Score = 0
    }
    rollDice(){
        let diceNum = Math.floor(Math.random()*6+1)
        if (diceNum > 1){
            diceNum + player1Score
            return player1Score
        }
        else{
            player1Score = 0
        }
        this.checkVictory()
    }
    checkVictory() {
        if (player1Score >= 20){
            alert ("congratulations player 1 wins")
        }
        else {
            this.rollDice2()
        }
    }
    rollDice2(){
        let diceNum = Math.floor(Math.random()*6+1)
        if (diceNum > 1){
            diceNum + player2Score
            return player2Score
            
        }
        else{
            player2Score = 0
        }
        this.checkVictory2()
    }
    checkVictory2() {
        if (player2Score >= 20){
            alert ("congratulations player 2 wins")
        }
        else {
            this.rollDice()
        }
    }
}

let person1 = prompt("please enter your name")
let person2 = prompt("please enter your name")

let newGame = new DiceGame (person1, person2)