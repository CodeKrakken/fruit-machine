function Player(machine) {
  this.machine = machine
  this.wallet = 0
  this.credit = 0
}

Player.prototype.play = function() {
  if(this.wallet <= 0) {return 'Insert Coin.'}
  this.gain(-1)
  this.outcome(this.machine.play())
}

Player.prototype.outcome = function(outcome) {
  if(outcome === 'Jackpot!') {
    this.gain(this.machine.float)
  } else if (outcome === 'Halfpot!') {
    this.gain(this.machine.float/2)
  } else if (outcome === 'Quarterpot!') {
    this.gain(5)
  }
  return outcome
}

Player.prototype.gain = function(amount) {
  console.log("Machine float = " + this.machine.float)
  console.log("player gains " + amount)
  if (this.machine.float < amount) {
    this.wallet += this.machine.float
    this.credit += (amount - this.machine.float)
    this.machine.float = 0
  } else {
    this.wallet += Math.floor(amount)
    this.machine.float -= Math.floor(amount)
  }
}



module.exports = Player