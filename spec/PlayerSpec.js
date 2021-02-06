'use strict'

const Player = require('../lib/Player')
let player
let machine

describe('player', function() {
  beforeEach(function() {
    machine = jasmine.createSpyObj('machine', ['play'])
    player = new Player(machine)
    player.wallet = 1
  })

  it('has a wallet', function() {
    expect(player.wallet).toBeDefined()
  })

  it('has access to a machine', function() {
    expect(player.machine).toBeDefined()
  })

  it('can play the machine', function() {
    expect(player.play).toBeDefined()
  })

  it('cannot play the machine with insufficient money', function() {
    player.wallet = 0
    expect(player.play()).toEqual('Insert Coin.')
  })

})