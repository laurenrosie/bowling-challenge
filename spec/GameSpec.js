'use-strict';

describe('Game', function(){
  beforeEach(function(){
    game = new Game()
    frame = new Frame()
    roll1 = new Roll(1)
    roll2 = new Roll(5)
    frame.addRoll(roll1)
    frame.addRoll(roll2)
  })

  it('Has an array of frames', function(){
    expect(game.frames()).toEqual([])
  })


  describe('AddFrame', function(){

    it('adds a frame to the frames array', function(){
      game.addFrame(frame)
      expect(game.frames()).toContain(frame)
    })


  })
})
