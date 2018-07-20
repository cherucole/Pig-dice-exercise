function Player(playerName){
  this.playerName=playerName;
  this.score=0;
};

function takeTurn(player){
  this.sum=0;
  this.sumNumbers=0;
  this.player=player;

};

Turn.prototype.rollDice= function(playerOne, playerTwo){
  var sumNumbers= Math.floor(Math.random()*6) + 1;
  this.sum +=sumNumbers;
}
