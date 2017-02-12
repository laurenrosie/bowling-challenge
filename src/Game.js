function Game(){
  this._frames = [];
  this._currentFrame = 0;
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.currentFrame = function () {
  return this._currentFrame;
};


Game.prototype.addFrame = function (frame) {
  this._frames.push(frame)
  this._currentFrame+=1
};


Game.prototype.generateTotals = function () {
  array = []
  runningTotal=0
  length = this._frames.length
  for(i=0; i<length; i++){
      theFrame = this._frames.shift()
      if(theFrame.isStrike()){
        nextTwoRolls = this.getNextTwoRolls(this._frames)
        nextFrameScore = nextTwoRolls[0].pins()+nextTwoRolls[1].pins()
        roll1Score = runningTotal + 10 + nextFrameScore
        roll2Score = roll1Score
      }else if(theFrame.isSpare()){
        nextTwoRolls = this.getNextTwoRolls(this._frames)
        roll1Score = runningTotal + theFrame.rolls()[0].pins()
        roll2Score = roll1Score + theFrame.rolls()[1].pins() + nextTwoRolls[1].pins()
      }else{
        roll1Score = runningTotal+theFrame.rolls()[0].pins()
        roll2Score = roll1Score + theFrame.rolls()[1].pins()
      }
      runningTotal = roll2Score
      array.push([roll1Score, roll2Score])
  }
  return array
};


Game.prototype.getNextTwoRolls = function (frames) {
      if(frames[0].isStrike()){
        rolls = [frames[0].rolls()[0], frames[1].rolls()[0]]
      }else{
        rolls = frames[0].rolls()
      }
    return rolls
};
