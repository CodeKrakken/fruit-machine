function Player(machine) {
  this.machine = machine
  this.wallet = 0
}

Player.prototype.play = function() {
  return(this.wallet === 0) ? 'Insert Coin.' : 'Spinning reels.'
}

module.exports = Player