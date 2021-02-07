function Machine() {
  this.colours = ['black', 'white', 'green', 'yellow']
  this.result = []
  this.float = 100
}

Machine.prototype.play = function() {
  for(let i=0;i<4;i++) {
    colourIndex = Math.floor(Math.random() * 3)
    this.result.push(this.colours[colourIndex])
  }
}

Machine.prototype.outcome = function() {
  if (this.matches() === 12) { return 'Jackpot!' }
  if (this.matches() === 0) { return 'Halfpot!' } 
  if (this.adjacentMatch()) { return 'Quarterpot!' }
  return 'You lose!'
}

Machine.prototype.matches = function() {
  let matches = 0
  for(i=0;i<4;i++) {
    for(j=0;j<4;j++) {
      if (this.result[i] === this.result[j] && i !== j) { matches += 1 }
    }
  }
  return matches
}

Machine.prototype.adjacentMatch = function() {
  let outcome
  for (i=1;i<3;i++) {
    if (this.result[i] === this.result[i-1] || this.result[i] === this.result[i+1]) { outcome = true }
  }
  return outcome
}

module.exports = Machine