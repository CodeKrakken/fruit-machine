'use strict';
const Machine = require('../lib/Machine')
let machine

describe('machine', function() {
  beforeEach(function() {
    machine = new Machine()
  })

  it('can be initialized', function() {
    expect(machine).toBeDefined()
  })

  it('has an array for colours', function() {
    expect(machine.colours).toBeDefined()
  })

  it('has the right colours', function() {
    expect(machine.colours[0]).toEqual('black')
    expect(machine.colours[1]).toEqual('white')
    expect(machine.colours[2]).toEqual('green')
    expect(machine.colours[3]).toEqual('yellow')
  })

  it('populates results array when requested', function() {
    machine.play()
    expect(machine.result.length).toEqual(4)
  })

  it('recognises a win', function() {
    machine.result = ['black', 'black', 'black', 'black']
    expect(machine.outcome()).toEqual('You win!')
  })

  it('recognises a loss', function() {
    machine.result = ['black', 'white', 'black', 'black']
    expect(machine.outcome()).toEqual('You lose!')
  })
})