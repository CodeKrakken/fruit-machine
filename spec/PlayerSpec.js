'use strict'

const Player = require('../lib/Player')
let player

describe('player', function() {
  beforeEach(function() {
    player = new Player
  })

  it('has a wallet', function() {
    expect(player.wallet).toBeDefined()
  })

  it('can play the machine', function() {
    expect(player.play).toBeDefined()
  })

  it('cannot play the machine with insufficient money', function() {
    expect(player.play()).toEqual('Insert Coin.')
  })
})