function Player() {
  this.wallet = 0
}

Player.prototype.play = function() {
  if(this.wallet === 0) { return 'Insert Coin.' }
}

module.exports = Player