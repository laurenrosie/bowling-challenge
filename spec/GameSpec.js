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

  it('initially has current frame 0', function(){
    expect(game.currentFrame()).toEqual(0)
  });

  describe('#addFrame', function(){
    it('adds a frame to the frames array', function(){
      game.addFrame(frame)
      expect(game.frames()).toContain(frame)
    })
    it('changes the current frame by 1', function(){
      game.addFrame(frame)
      expect(game.currentFrame()).toEqual(1)
    })
  });

});
