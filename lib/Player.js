function Player(machine) {
  this.machine = machine
  this.wallet = 0
  this.credit = 0
}

Player.prototype.play = function() {
  if (this.wallet + this.credit === 0) { return 'Insert Coin.' }
  this.credit > 0 ? this.credit -= 1 : this.gain(-1)
  this.outcome(this.machine.play())
}

Player.prototype.outcome = function(outcome) {
  let prize = 0
  if (outcome === 'Jackpot!') { prize = this.machine.float }
  if (outcome === 'Halfpot!') { prize = this.machine.float/2 }
  if (outcome === 'Quarterpot!') { prize = 5 }
  this.gain(prize)
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