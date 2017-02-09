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
