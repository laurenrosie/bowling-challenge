'use-strict';

function Roll(pins){
  this._pins = pins
}

Roll.prototype.knockedPins = function () {
  return this._pins;
};

Roll.prototype.isStrike = function () {
  return this.knockedPins() == 10
};
