'use strict'

const Player = require('../lib/Player')
let player
let machine

describe('player', function() {
  beforeEach(function() {
    machine = {
      play: function() {},
      float: 100
    }
    player = new Player(machine)
    player.wallet = 1
  })

  it('has a wallet', function() {
    expect(player.wallet).toBeDefined()
  })

  it('has access to a machine', function() {
    expect(player.machine).toBeDefined()
  })

  it('has a play function', function() {
    expect(player.play).toBeDefined()
  })

  it('can play a game', function() {
    spyOn(machine, 'play')
    player.play()
    expect(machine.play).toHaveBeenCalled()
  })

  it('cannot play the machine with insufficient money', function() {
    player.wallet = 0
    expect(player.play()).toEqual('Insert Coin.')
  })

  it('gets charged for playing', function() {
    player.play()
    expect(player.wallet).toEqual(0)
    expect(machine.float).toEqual(101)
  })

  it('can win the jackpot', function() {
    spyOn(machine, 'play').and.returnValue('Jackpot!')
    player.play()
    expect(machine.float).toEqual(0)
    expect(player.wallet).toEqual(101)
  })

  it('can win the halfpot', function() {
    spyOn(machine, 'play').and.returnValue('Halfpot!')
    player.play()
    expect(machine.float).toEqual(51)
    expect(player.wallet).toEqual(50)
  })

  it('can win the quarterpot', function() {
    spyOn(machine, 'play').and.returnValue('Quarterpot!')
    player.play()
    expect(player.wallet).toEqual(5)
    expect(machine.float).toEqual(96)
  })

  it('gains play credits if machine float cannot cover winnings', function() {
    spyOn(machine, 'play').and.returnValue('Quarterpot!')
    machine.float = 4
    player.play()
    expect(player.credit).toEqual(1)
    expect(machine.float).toEqual(0)
  })

})

