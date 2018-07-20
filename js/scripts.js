function Player(playerName) {
  this.playerName = playerName;
  this.score = 0;
};

function takeTurn(player) {
  this.sum = 0;
  this.sumNumbers = 0;
  this.player = player;

};

takeTurn.prototype.rollDice = function(playerOne, playerTwo) {
  var sumNumbers = Math.floor(Math.random() * 6) + 1;
  this.sum += sumNumbers;

  if (sumNumbers == 1) {
    this.sum = 0;
    this.endTurn(playerOne, playerTwo);
    return sumNumbers;
  } else {
    this.sumNumbers += sumNumbers;
    return sumNumbers;
  };
};

takeTurn.prototype.endTurn = function(playerOne, playerTwo) {
  this.player.score += this.sum;
  this.sum = 0;
  this.sumNumbers = 0;
  if (this.player == playerOne) {
    this.player = playerTwo;
    $("#playerTwo").toggleClass("active");
    $("playerOne").toggleClass("active");
  } else if (this.player == playerTwo) {
    this.player = playerOne;
    $("#playerTwo").toggleClass("active");
    $("playerOne").toggleClass("active");

  };

};
$(document).ready(function() {
      var playerOne = new Player("Player One");
      var playerTwo = new Player("Player Two");

      var currentTurn = new takeTurn(playerOne);
      var sum = currentTurn.sum;
      $("#currentScore").text(sum);
      $("#playerOneScore").text(playerOne.score);
      $("#playerTwoScore").text(playerTwo.score);
      $("#current_player").text(currentTurn.player.playerName);
      $("form#roll").submit(function(event) {
        event.preventDefault();

        var result = currentTurn.diceRoller(playerOne, playerTwo);

        $('#diceScore').text(result);
        $('#currentScore').text(currentTurn.sum);

        if ((currentTurn.sum + currentTurn.player.score) >= 100) {
          if (currentTurn.player == playerOne) {
            $('#playerOneScore').text(currentTurn.sum + currentTurn.player.score);
            alert("You are the winner!");
          } else if (currentTurn.player == playerTwo) {
            $('#playerTwoScore').text(currentTurn.sum + currentTurn.player.score)
            alert("You are the winner!");
          };
        };
      });

      $("form#endTurn").submit(function(event) {
       event.preventDefault();

       currentTurn.endTurn(playerOne, playerTwo);

       $('#current_player').text(currentTurn.player.userName);

       $('#playerOneScore').text(playerOne.score);
       $('#playerTwoScore').text(playerTwo.score);

       $('#roll').text(currentTurn.sumNumbers);
       $('#currentScore').text(currentTurn.sum);
   });
});
