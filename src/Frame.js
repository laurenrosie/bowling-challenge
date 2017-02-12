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

Frame.prototype.isStrike = function () {
  roll1 = this.rolls()[0]
  return (roll1.pins()==10)
};

Frame.prototype.totalPins = function () {

  return this._rolls[0].pins() + this._rolls[1].pins()
};

Frame.prototype.isSpare = function () {
  total = this.rolls()[0].pins() + this.rolls()[1].pins()
  if(total==10){
    return true
  }else{
    return false
  }
};
