function Machine() {
  this.colours = ['black', 'white', 'green', 'yellow']
  this.result = []
}

Machine.prototype.spin = function() {
  for(let i=0;i<4;i++) {
    colourIndex = Math.floor(Math.random() * 3)
    this.result.push(this.colours[colourIndex])
  }
}

Machine.prototype.outcome = function() {
  if(this.result[0] === this.result[1] &&
     this.result[0] === this.result[2] &&
     this.result[0] === this.result[3]) 
  {
    return 'You win!'
  }
  return 'You lose!'
}

module.exports = Machine