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
  if(this.allMatch()) 
  {
    return 'Jackpot!'
  } else if (this.allDifferent()) {
    return 'Halfpot!'
  } else {
    return 'You lose!'
  }
}

Machine.prototype.allMatch = function() {
  return this.result[0] === this.result[1] &&
         this.result[0] === this.result[2] &&
         this.result[0] === this.result[3]
}

Machine.prototype.allDifferent = function() {
  for(i=0;i<4;i++) {
    for(j=0;j<4;j++) {
      if(this.result[i] === this.result[j] && i !== j) { return false } 
    }
  }
  return true
}

module.exports = Machine