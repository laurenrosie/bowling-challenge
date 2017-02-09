function Frame(){
  this._rolls = [];
};

Frame.prototype.rolls = function () {
  return this._rolls
};

Frame.prototype.getRoll = function(i){
  return this.rolls()[i-1]
};

Frame.prototype.addRoll = function(roll) {
  this._rolls.push(roll);
};
