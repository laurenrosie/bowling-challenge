describe('Game', function() {

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    roll1 = new Roll(1);
    roll2 = new Roll(1);
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

  describe('#generateTotals', function(){
    it('correctly calculates for a game with no strikes', function(){
      for(i=0; i<10; i++){
        game.addFrame(frame)
      }
      totals = [[1, 2],[3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]
      expect(game.generateTotals()).toEqual(totals)
    })

    it('correctly calculates for game with single strikes', function(){
      strikeFrame = new Frame()
      strikeRoll = new Roll(10)
      emptyRoll = new Roll(0)
      strikeFrame.addRoll(strikeRoll)
      strikeFrame.addRoll(emptyRoll)
      game.addFrame(frame)
      game.addFrame(strikeFrame)
      game.addFrame(frame)
      expect(game.generateTotals()).toEqual([[1, 2],[14, 14],[15, 16]])
    });


        it('correctly calculates for game with double strikes', function(){
          strikeFrame = new Frame()
          strikeRoll = new Roll(10)
          emptyRoll = new Roll(0)
          strikeFrame.addRoll(strikeRoll)
          strikeFrame.addRoll(emptyRoll)
          game.addFrame(frame)
          game.addFrame(strikeFrame)
          game.addFrame(strikeFrame)
          game.addFrame(frame)
          expect(game.generateTotals()).toEqual([[1, 2], [23, 23], [35, 35], [36, 37]])
        });

        it('correctly calculates for game with tiple strikes', function(){
          strikeFrame = new Frame()
          strikeRoll = new Roll(10)
          emptyRoll = new Roll(0)
          strikeFrame.addRoll(strikeRoll)
          strikeFrame.addRoll(emptyRoll)
          game.addFrame(frame)
          game.addFrame(strikeFrame)
          game.addFrame(strikeFrame)
          game.addFrame(strikeFrame)
          game.addFrame(frame)
          expect(game.generateTotals()).toEqual([[1, 2], [32, 32], [53, 53], [65, 65], [66, 67]])
        });

        it('correctly calculates points for a spare', function(){
          spareFrame = new Frame()
          spareFrame.addRoll(roll1)
          spareRoll = new Roll(9)
          spareFrame.addRoll(spareRoll)
          game.addFrame(frame)
          game.addFrame(spareFrame)
          game.addFrame(frame)
          expect(game.generateTotals()).toEqual([[1, 2], [3, 13], [14, 15]])
        })
  });

});
