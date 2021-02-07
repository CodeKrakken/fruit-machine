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
  let prizes = { 'Jackpot!' : this.machine.float, 
                 'Halfpot!' : this.machine.float/2,
              'Quarterpot!' : 5
 }
  if (Object.keys(prizes).includes(outcome)) { this.gain(prizes[outcome]) }
  return outcome
}

Player.prototype.gain = function(amount) {
  if (this.machine.float < amount) {
    this.gainCredit(amount)
  } else {
    this.gainMoney(amount)
  }
}

Player.prototype.gainCredit = function(amount) {
  this.wallet += this.machine.float
  this.credit += (amount - this.machine.float)
  this.machine.float = 0
}

Player.prototype.gainMoney = function(amount) {
  this.wallet += Math.floor(amount)
  this.machine.float -= Math.floor(amount)
}



module.exports = Player