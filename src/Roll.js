function Roll(pins){
  this._pins = pins;
}

Roll.prototype.pins = function () {
  return this._pins;
};
