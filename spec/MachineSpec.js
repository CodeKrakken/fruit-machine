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
})