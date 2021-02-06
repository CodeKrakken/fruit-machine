function Player(machine) {
  this.machine = machine
  this.wallet = 0
}

Player.prototype.play = function() {
  if(this.wallet > 0) {
    this.wallet -= 1
    this.machine.float += 1
    this.machine.play()
  } else {
    return 'Insert Coin.'
  }
}

module.exports = Player