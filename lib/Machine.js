function Machine() {
  this.colours = ['black', 'white', 'green', 'yellow']
  this.result = []
}

Machine.prototype.spin = function() {
  for(let i=0;i<4;i++) {
    colourIndex = Math.floor(Math.random() * 3)
    this.result.push(this.colours[colourIndex])
  }
  console.log(this.result)
}
module.exports = Machine