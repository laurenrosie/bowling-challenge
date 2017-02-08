describe('Game', function() {

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    roll1 = new Roll(5);
    roll2 = new Roll(3);
    frame.addRoll(roll1)
    frame.addRoll(roll2)
  });

  it('has initially empty frames array', function(){
    expect(game.frames()).toEqual([])
  });

  describe('#addFrame', function(){
    it('adds a frame to the frames array', function(){
      game.addFrame(frame)
      expect(game.frames()).toContain(frame)
    })
  });

});
