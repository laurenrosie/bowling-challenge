describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame();
    roll = new Roll(4)
  });

  it('has an initially empty rolls attribute', function(){
    expect(frame.rolls()).toEqual([])
  });

  describe('#addRoll', function(){
    it('adds a roll to the rolls array', function(){
      frame.addRoll(roll)
      expect(frame.rolls()).toContain(roll)
    });
  });

  describe('#getRoll', function(){
    it('adds a roll to the rolls array', function(){
      frame.addRoll(roll)
      expect(frame.getRoll(1)).toEqual(roll)
    });
  });

  describe('#isStrike', function(){
    it('correctly tells when a frame is a strike', function(){
      roll1 = new Roll(10)
      roll2 = new Roll(0)
      strikeFrame = new Frame()
      strikeFrame.addRoll(roll1)
      strikeFrame.addRoll(roll2)
      expect(strikeFrame.isStrike()).toEqual(true)
    })

    it('correctly tells when a frame is not a strike', function(){
      frame.addRoll(roll)
      frame.addRoll(roll)
      expect(frame.isStrike()).toEqual(false)
    })
  })

  describe('#isSpare', function(){
    it('correctly tells when a frame is a spare', function(){
      roll1 = new Roll(9)
      roll2 = new Roll(1)
      spareFrame = new Frame()
      spareFrame.addRoll(roll1)
      spareFrame.addRoll(roll2)
      expect(spareFrame.isSpare()).toEqual(true)
    })

    it('correctly tells when a frame is not a strike', function(){
      frame.addRoll(roll)
      frame.addRoll(roll)
      expect(frame.isSpare()).toEqual(false)
    })
  })
});
