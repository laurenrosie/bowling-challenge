describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame();
    roll = new Roll(5)
  });

  it('has an initially empty rolls attribute', function(){
    expect(frame.rolls()).toEqual([])
  });

  describe('#addRoll', function(){
    it('adds a roll to the rolls array', function(){
      frame.addRoll(roll)
      expect(frame.rolls()).toContain(roll)
    })
  })
});
