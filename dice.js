class DiceGame {
    constructor(player1, player2){
        this._player1 = player1
        this._player2 = player2
        player1Score = 0
        player2Score = 0
    }
    rollDice(){
     return Math.floor(Math.random()*6+1)
 }

}