'use-strict';

function Frame(){
  this._rolls = [];
}


Frame.prototype.rolls = function () {
  return this._rolls
}

Frame.prototype.addRoll = function (roll) {
    if(this.rolls().length >=2){
      throw 'Only two rolls per frame'
    }else{
      this.checkStrikeAddRoll(roll)
  }
}

Frame.prototype.checkStrikeAddRoll = function(roll){
  if( roll.isStrike() == true){
    this._rolls.push(roll)
    this.addRoll(new Roll(0))
  }else{
    this._rolls.push(roll)
  }
}
