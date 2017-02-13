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
  currentFrames = this.copyFrames()

  for(i=0; i<length; i++){
      theFrame = currentFrames.shift()
      frameScores = this.calculateFrameScore(theFrame, currentFrames, runningTotal)
      runningTotal = frameScores[1]
      array.push(frameScores)
  }

  return array
};

Game.prototype.calculateFrameScore=function(theFrame, currentFrames, runningTotal){
  if(theFrame.isStrike()){
    return this.strikeScore(currentFrames, runningTotal)
  }else if(theFrame.isSpare()){
    return this.spareScore(theFrame, currentFrames, runningTotal)
  }else{
    return this.normalScore(theFrame, runningTotal)
  }
};

Game.prototype.copyFrames = function () {
  array = []
  length = (this.frames().length)
  for(i=0; i<length; i++){
    array.push(this.frames()[i])
  }
  return array
};

Game.prototype.normalScore = function (theFrame, runningTotal) {
  roll1Score = runningTotal + theFrame.rolls()[0].pins()
  roll2Score = roll1Score + theFrame.rolls()[1].pins()
  return [roll1Score, roll2Score]

};
Game.prototype.strikeScore= function(currentFrames, runningTotal){
    nextTwoRolls = this.getNextTwoRolls(currentFrames)
    nextFrameScore = nextTwoRolls[0].pins()+nextTwoRolls[1].pins()
    roll1Score = runningTotal + 10 + nextFrameScore
    return [roll1Score, roll1Score]
};

Game.prototype.spareScore = function(theFrame, currentFrames, runningTotal){
      nextTwoRolls = this.getNextTwoRolls(currentFrames)
      roll1Score = runningTotal + theFrame.rolls()[0].pins()
      roll2Score = roll1Score + theFrame.rolls()[1].pins() + nextTwoRolls[1].pins()
      return [roll1Score, roll2Score]
};

Game.prototype.getNextTwoRolls = function (frames) {
      if(frames[0].isStrike()){
        rolls = [frames[0].rolls()[0], frames[1].rolls()[0]]
      }else{
        rolls = frames[0].rolls()
      }
    return rolls
};
