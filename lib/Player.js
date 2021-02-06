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
  if(outcome === 'Jackpot!') {
    this.wallet += this.machine.float
    this.machine.float = 0
  } else if (outcome === 'Halfpot!') {
    this.wallet += Math.floor(this.machine.float/2)
    this.machine.float -= Math.floor(this.machine.float/2)
  }
  return outcome
}



module.exports = Player