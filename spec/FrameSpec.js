'use-strict';

describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame();
    roll1 = new Roll(1);
    roll2 = new Roll(5);
  });

  it('contains intially an empty array of rolls', function(){
    expect(frame.rolls()).toEqual([])
  });

  describe('add a roll', function(){
    it('can add a roll', function(){
      frame.addRoll(roll1)
      expect(frame.rolls()).toContain(roll1)
    });

    it('can\'t add more than two rolls', function(){
      frame.addRoll(roll1)
      frame.addRoll(roll2)
      expect(function(){frame.addRoll(roll2)}).toThrow('Only two rolls per frame')
    });
  });

});
