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
            this.checkVictory()
        }
        else{
            alert
        }
    }
    checkVictory()


}