'use-strict';

describe('Roll', function(){
  
  beforeEach(function(){
    roll = new Roll(5);
  })

  it('has a number of knocked pins', function(){
    expect(roll.knockedPins()).toEqual(5)
  })

  it('knows if it is a strike', function(){
    expect(roll.isStrike()).toEqual(false)
  })

})
