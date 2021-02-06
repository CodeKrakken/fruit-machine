function Player(machine) {
  this.machine = machine
  this.wallet = 0
}

Player.prototype.play = function() {
  if(this.wallet <= 0) {return 'Insert Coin.'}
  this.wallet -= 1
  this.machine.float += 1
  this.outcome(this.machine.play())
}

Player.prototype.outcome = function(outcome) {
  if(outcome === 'You win!') {
    this.wallet += this.machine.float
    this.machine.float = 0
  }
  return outcome
}



module.exports = Player